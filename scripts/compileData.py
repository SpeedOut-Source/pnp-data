import os
import sys
import re
import json
import subprocess
import frontmatter
from bs4 import BeautifulSoup
from markdown import markdown
import urllib.parse


def replaceImgRelativePath(data, wPath):
    rootConfigPath = 'configs.json'
    imgPattern = r"\.\.\/images\/"
    if os.path.exists(rootConfigPath):
        with open(rootConfigPath, 'r') as f:
            root_configs = json.load(f)
    if not (root_configs.get('baseImgPath') or root_configs.get('baseUrl') or root_configs.get('repoPath')):
        raise Exception('Error: baseImgPath or baseUrl key not found')
        sys.exit(1)

    baseImgUrl = root_configs['baseUrl'] + \
        root_configs['repoPath'] + root_configs['baseImgPath']

    if re.search(imgPattern, data):
        finalData = re.sub(imgPattern, baseImgUrl, data)

        with open(wPath, 'w') as w:
            w.write(finalData)

        return finalData
    return data


def updateConfig(key, value):
    configPath = os.path.join('db', 'configs.json')

    if os.path.exists(configPath):
        with open(configPath, 'r') as f:
            db_configs = json.load(f)
    else:
        db_configs = {}

    db_configs[key] = value

    with open(configPath, 'w') as f:
        json.dump(db_configs, f)


def get_image_from_content(content):
    pattern = r"!\[.*\]\((.*)\)"
    match = re.search(pattern, content)
    if match:
        return match.group(1)
    else:
        pattern = r"<img.*src=\"([^\"]+)\""
        match = re.search(pattern, content)
        if match:
            return match.group(1)
        else:
            return ""


def extractReadTime(content):
    html = markdown(content)
    text = ''.join(BeautifulSoup(
        html, features="html.parser").findAll(string=True))

    words = text.split()
    read_time_minutes = round(len(words) / 200)
    if read_time_minutes < 1:
        return 1
    return read_time_minutes


def extractDate(filePath, post):
    try:
        date_str = post['date']
        return int(date_str)
    except KeyError:
        try:
            output = subprocess.check_output(
                ['git', 'log', '-1', '--pretty=format:%ct', filePath])
            date_str = output.decode().strip()
            if not date_str:
                raise "No date info"
        except:
            stat = os.stat(filePath)
            date_str = str(int(stat.st_mtime))
        return int(date_str) * 1000


def get_title_from_content(file_path, content):
    html = markdown(content)
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.find('h1')
    if title:
        return title.text
    else:
        return os.path.splitext(os.path.basename(file_path))[0]


def extract_desc_from_content(content):
    html = markdown(content)
    soup = BeautifulSoup(html, 'html.parser')

    first_headings = soup.find_all(re.compile('^h[1-6]$'), recursive=False)

    desc_elem = None
    for heading in first_headings:
        next_elem = heading.find_next_sibling()
        if next_elem and not next_elem.name.startswith('h'):
            desc_elem = next_elem
            break

    if desc_elem:
        desc = desc_elem.get_text().strip()
    else:
        desc = soup.get_text().strip()

    return desc if len(desc) < 100 else desc[:100] + '...'


def parsePlatforms(post):
    platforms = []
    for key, value in post.to_dict().items():
        if key.startswith("p_name"):
            index = key.split("_")[2]
            p_link = post.get(f"p_link_{index}")
            if not p_link:
                print(f"Error: missing link for platform '{key},{value}'")
                sys.exit(1)
            platform = {
                "name": value,
                "link": p_link
            }
            platforms.append(platform)
    return platforms


def parseImgs(post):
    imgs = []
    for key, value in post.to_dict().items():
        if key.startswith("img_"):
            img_link = post.get(key)
            if not img_link:
                print(f"Error: missing img link '{key},{value}'")
                sys.exit(1)
            imgs.append(img_link)
    return imgs


def projectCompile():

    FOLDER_PATH = "projects/"

    if not os.path.exists(FOLDER_PATH):
        print('Error not found directory: '+FOLDER_PATH)
        return

    projects_list = []

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r") as f:
                md_text = f.read()

            md_text = replaceImgRelativePath(md_text, file_path)

            post = frontmatter.loads(md_text)
            app_name = post.get('appName', '')
            app_logo = post.get('appLogo', '')
            company_name = post.get('companyName', '')
            company_logo = post.get('companyLogo', '')
            date = extractDate(file_path, post)
            read_time = extractReadTime(post.content)
            img_url = post.get(
                'imgUrl', get_image_from_content(post.content))
            what_text = post.get('whatText', '')
            result = post.get('result', '')

            project_dict = {
                "imgUrl": img_url,
                "app": {"name": app_name, "logoUrl": app_logo},
                "company": {"name": company_name, "logoUrl": company_logo},
                "whatText": what_text,
                "result": result,
                "date": date,
                "readTime": read_time,
                "fileName": filename
            }

            projects_list.append(project_dict)

    sorted_projects = sorted(
        projects_list, key=lambda x: x['date'], reverse=True)

    output_dict = {"projects": sorted_projects}

    with open("db/projects.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('projectTotal', len(sorted_projects))


def blogsCompile():

    FOLDER_PATH = "blogs/"

    if not os.path.exists(FOLDER_PATH):
        print('Error not found directory: '+FOLDER_PATH)
        return

    blogs_list = []

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r") as f:
                md_text = f.read()

            md_text = replaceImgRelativePath(md_text, file_path)

            post = frontmatter.loads(md_text)
            title = post.get('title', get_title_from_content(
                filename, post.content))
            desc = post.get('desc', extract_desc_from_content(post.content))

            date = extractDate(file_path, post)
            read_time = extractReadTime(post.content)
            img_url = post.get('imgUrl', get_image_from_content(post.content))

            blog_dict = {
                "imgUrl": img_url,
                "title": title,
                "desc": desc,
                "date": date,
                "readTime": read_time,
                "fileName": filename
            }

            blogs_list.append(blog_dict)

    sorted_blogs = sorted(
        blogs_list, key=lambda x: x['date'], reverse=True)

    output_dict = {"blogs": sorted_blogs}

    with open("db/blogs.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('blogTotal', len(sorted_blogs))


def appsCompile():

    FOLDER_PATH = "apps/"

    apps_list = []

    if not os.path.exists(FOLDER_PATH):
        print('Error not found directory: '+FOLDER_PATH)
        return

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r") as f:
                md_text = f.read()

            md_text = replaceImgRelativePath(md_text, file_path)

            post = frontmatter.loads(md_text)
            title = post.get('title', get_title_from_content(
                filename, post.content))

            date = extractDate(file_path, post)
            logoUrl = post.get('logoUrl', get_image_from_content(post.content))

            category = post.get('category', 'Other')

            platforms = parsePlatforms(post)
            imgs = parseImgs(post)

            app_dict = {
                "imgUrl": logoUrl,
                "title": title,
                "category": category,
                "date": date,
                "fileName": filename,
                "imgs": imgs,
                "platforms": platforms
            }

            apps_list.append(app_dict)

    sorted_apps = sorted(
        apps_list, key=lambda x: x['date'], reverse=True)

    output_dict = {"apps": sorted_apps}

    with open("db/apps.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('appTotal', len(sorted_apps))


def companyCompile():

    FOLDER_PATH = "company/"

    company_list = []

    if not os.path.exists(FOLDER_PATH):
        print('Error not found directory: '+FOLDER_PATH)
        return

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r") as f:
                md_text = f.read()

            md_text = replaceImgRelativePath(md_text, file_path)

            post = frontmatter.loads(md_text)
            title = post.get('title', get_title_from_content(
                filename, post.content))

            date = extractDate(file_path, post)
            logoUrl = post.get('logoUrl', get_image_from_content(post.content))
            homePage = post.get('homePage', '')
            start = post.get('start', -1)
            end = post.get('end', -1)
            read_time = extractReadTime(post.content)

            company_dict = {
                "imgUrl": logoUrl,
                "title": title,
                "homePage": homePage,
                "date": date,
                "start": start,
                "end": end,
                "readTime": read_time,
                "fileName": filename
            }

            company_list.append(company_dict)

    sorted_company = sorted(
        company_list, key=lambda x: x['date'], reverse=True)

    output_dict = {"company": sorted_company}

    with open("db/workInfo.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('companyTotal', len(sorted_company))


if __name__ == '__main__':
    if not os.path.exists('db'):
        os.makedirs("db", exist_ok=True)
    
    print('✨ Parsing projects')
    projectCompile()
    print('✅ Project parse done')

    print('📚 Parsing blogs')
    blogsCompile()
    print('✅ Blogs parse done')

    print('📱 Parsing apps')
    appsCompile()
    print('✅ Apps parse done')

    print('👔 Parsing workInfo')
    companyCompile()
    print('✅ WorkInfo parse done')

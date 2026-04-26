# Fix the broken portfolio-view.html
with open('portfolio-view.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and fix the duplicate init() function
old_init = '''function init() {
            console.log('=== 开始初始化 ===');
            // 获取 DOM 元素
            listPage = document.getElementById('listPage');
            detailPage = document.getElementById('detailPage');
        function init() {
            console.log('=== 开始初始化 ===');
            // 获取 DOM 元素
            listPage = document.getElementById('listPage');
            detailPage = document.getElementById('detailPage');
            // 使用硬编码的项目数据
            projects = [...sampleProjects];'''

new_init = '''function init() {
            console.log('=== 开始初始化 ===');
            // 获取 DOM 元素
            listPage = document.getElementById('listPage');
            detailPage = document.getElementById('detailPage');
            // 使用硬编码的项目数据
            projects = [...sampleProjects];'''

if old_init in content:
    content = content.replace(old_init, new_init)
    print('已修复 init() 函数')
else:
    print('未找到重复的 init() 函数')

with open('portfolio-view.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('保存完成')

# 添加CSS样式
with open('portfolio-view.html', 'r', encoding='utf-8') as f:
    content = f.read()

with open('temp_css.txt', 'r', encoding='utf-8') as f:
    new_css = f.read()

# 在CSS结尾前插入新样式
insert_point = '        .detail-label {\n            font-weight: 540;\n            color: var(--color-black);\n        }'

content = content.replace(insert_point, insert_point + new_css)

with open('portfolio-view.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('CSS样式添加完成！')

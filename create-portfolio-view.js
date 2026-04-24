const fs = require('fs');
const input = 'index.html';
const output = 'portfolio-view.html';

// 读取源文件
const content = fs.readFileSync(input, 'utf-8');

// 1. 删除 Form Page 部分
const formPageStart = '<!-- ==================== Form Page ==================== -->';
const formPageEnd = '<\/div>    <!-- ==================== List Page ==================== -->';
const contentWithoutForm = content.substring(0, content.indexOf(formPageStart)) + content.substring(content.indexOf(formPageEnd));

// 2. 移除编辑按钮和删除按钮
let contentWithoutEditButtons = contentWithoutForm
    .replace(/<button[^>]*onclick="editCurrentProject\(\)"[^>]*>[\s\S]*?<\/button>/g, '')
    .replace(/<button[^>]*onclick="deleteCurrentProject\(\)"[^>]*>[\s\S]*?<\/button>/g, '');

// 3. 移除 "添加项目" 按钮
contentWithoutEditButtons = contentWithoutEditButtons.replace(/<button[^>]*onclick="goToForm\(\)"[^>]*>[\s\S]*?<\/button>/g, '');

// 4. 清理 JavaScript - 移除编辑相关函数
let contentWithoutEditFunctions = contentWithoutEditButtons
    .replace(/const projectForm = document\.getElementById\('projectForm'\);/g, '// REMOVED: projectForm')
    .replace(/function goToForm[\s\S]*?<\/script>/g, '// REMOVED: goToForm')
    .replace(/function editCurrentProject[\s\S]*?<\/script>/g, '// REMOVED: editCurrentProject')
    .replace(/function deleteCurrentProject[\s\S]*?<\/script>/g, '// REMOVED: deleteCurrentProject')
    .replace(/projectForm\.addEventListener[\s\S]*?<\/script>/g, '// REMOVED: projectForm event listener')
    .replace(/function loadProjects[\s\S]*?<\/script>/g, '// REMOVED: loadProjects')
    .replace(/function saveProjects[\s\S]*?<\/script>/g, '// REMOVED: saveProjects');

// 5. 修改 init 函数 - 使用硬编码项目
const hardcodedProjects = [
    {
        name: "Phiz AI",
        tagline: "集成在社交软件中的智能小助理",
        role: "产品经理",
        description: "Phiz AI是一款集成在Phiz社交应用中的AI智能助手，为社交用户提供对话、创作、信息获取等多种AI能力。产品设计采用侧边栏历史记录、底部标签导航等交互模式，支持文本、语音、图片三种输入方式，让用户无需切换APP即可完成朋友圈文案生成、创意图片创作、音乐制作、OCR识别、多语言翻译等任务。通过打通APP内部链路，Phiz AI将AI能力无缝融入日常社交场景，帮助用户提升内容创作效率，增强社交互动体验。",
        stats: "使用率提升35.4%, 用户转化率12%, 整体功能使用率第5位",
        painPoints: "工具碎片化：用户需要在不同APP间切换才能使用不同AI功能（聊天、写作、翻译等），增加操作成本\n学习成本高：每款AI工具有独立的操作逻辑和界面，用户需要花费时间学习新工具，降低使用意愿\n场景割裂：对话、创作、信息获取等场景无法自然衔接，用户需要重复输入上下文信息\n历史管理困难：对话记录和创作内容难以统一管理和查找，重要内容容易丢失\n交互引导缺失：单独的对话框，无法激起使用欲望，不知道能使用哪些AI功能",
        personas: "内容创作活跃型（主要）\n功能按需使用型（次要）\n信息轻度获取型（扩展）",
        userJourney: "触发需求：用户在使用phiz时遇到需要AI帮助的场景，如写作、翻译、问答等，懒得切换工具\n打开应用：打开Phiz AI，看到熟悉的对话界面，和底部功能标签，界面简洁直观\n选择功能：通过底部标签页切换功能（对话、写作、图片等），或直接在对话界面输入，支持文本、语音、图片三种输入方式\n获得结果：AI快速返回结果，用户可以复制保存、继续对话深入，或在侧边栏查看历史记录",
        userStories: "作为内容创作活跃型用户，我想要快速生成吸引人的朋友圈文案和配图，以便在日常生活中持续分享生活点滴，获得更多点赞和评论\n作为功能按需使用型用户，我想要OCR识别图片中的文字，以便快速提取朋友分享的图片中的有用信息，无需手动输入\n作为信息轻度获取型用户，我想要快速查询天气信息，以便和朋友确认出行计划时不用切换天气APP\n作为信息轻度获取型用户，我想要查看每日新鲜事，以便在和朋友聊天时有话题可聊，融入社交互动",
        features: "基本聊天功能：基于大语言模型的多轮对话能力，支持上下文理解，准确响应率高\n历史记录侧边栏：管理所有对话历史，快速搜索、回顾和继续之前的对话\n底部标签导航：写作、创作图片、生成音乐、新闻等功能的便捷切换\n写作：文案生成、邮件撰写、报告输出，多种写作模板，一键生成高质量内容，提升写作效率\n图片生成：文本描述生成创意图片，支持多种风格和尺寸，快速生成高清图片\n图片转文字：强大的OCR能力，精准识别图片内容，并回答相关问题\n创作音乐：接入API,生成多种风格的音乐\n语音聊天：实时语音对话，流式识别和反馈，自然的语音交互体验\n多语言翻译：支持葡语，西班牙语等多种语言的互译，准确传达语义和文化内涵\n查询天气：实时天气信息查询，支持南美热门城市，提供详细的天气预报和建议\n每日新鲜事：抓取全球与巴西热点新闻，每日定时新闻推送。联动channel功能，打通APP链路\n新闻后台：内容管理和发布系统，支持内容审核和上下架管理，保障内容质量",
        axureUrl: "https://39ilcq.axshare.com",
        designUrl: "",
        createdAt: "2025.06 - 2025.07"
    },
    {
        name: "Phiz Call 音视频通话",
        tagline: "社交场景的有温度通话工具",
        role: "产品经理",
        description: "Phiz Call是一款聚焦社交场景的音视频通话工具，通过解决巴西用户网络异常痛点、拓展社交关系链、提供情感化设计体验，为用户的情感维系、朋友聚会、兴趣协作等社交场景提供稳定、便捷、有趣的实时沟通服务。我负责音视频通话功能的产品设计，包括1v1/群组通话、屏幕共享等核心功能。产品基于真实用户研究（20+访谈），针对4大社交圈层（核心社交圈、扩展社交圈、轻社交圈、同好社交圈）和4大场景（情感维系、内容互动、信息协调、群组社交）进行深度优化。",
        stats: "4大用户圈层, 4大核心场景, 20+用户访谈, 85%内测满意度",
        painPoints: "收不到推送通知：app在后台或者关闭状态下，收不到来电推送，无法直接接听\n网络异常痛点：通话突然断开，不知道是网络问题还是对方挂断，情感交流被打断，产生焦虑\n基础体验较差：通话整体流程和细节体验与成熟产品存在差距，通话状态变更，快捷回复，通话结束场景等细节考虑不足\n社交关系链拓展困难：想邀请朋友加入通话但不在群里，需要逐个私聊邀请，操作繁琐",
        personas: "核心社交圈（主要）\n扩展社交圈（次要）\n轻社交圈（扩展）\n同好社交圈（扩展）",
        userJourney: "情感维系场景（Ana异地睡前视频）：晚上10点习惯性检查手机→整理背景调整光线→点击视频通话等待接听→分享今天的事以及情感交流→互道晚安带着满足感入睡（痛点：通话异常结束）\n朋友聚会讨论（Lucas组织朋友群）：计划周末聚会需要协调→在朋友群组通话→讨论时间地点投票决定→确认计划分享到群里（痛点：通话不稳定）\n临时问事协调（Mariana确认信息）：需要确认信息想到对方→直接拨打等待接听→询问问题得到答案→挂断（痛点：未能及时收到来电）\n学习小组讨论（Julia设计小组）：准备学习讨论整理议题→在学习群组通话→分享屏幕讨论作业→记录不完整需要手动记录（痛点：屏幕共享看不清，邀请更多成员加入步骤繁琐）",
        userStories: "作为核心社交圈用户（Ana），我想要网络断开预警和智能重连，以便避免情感交流突然中断的焦虑，保持通话连续性\n作为扩展社交圈用户（Lucas），我想要群通话便捷，快速的组织群通话\n作为轻社交圈用户（Mariana），我想要及时收到来电，通话稳定进行\n作为同好社交圈用户（Julia），我想要群组互动便捷，能够邀请群外成员和进行通话链接分享，以便快速组织朋友聚会，拓展社交关系链",
        features: "基础通话体验：1V1,1VN,群组音视频通话，屏幕共享等互动功能。呼叫状态流转提示，发言者高亮，快捷回复，留言功能等体验优化\n网络异常兜底：智能重连、弱网降级（自动降低画质/切音频）、明确提示原因（网络问题vs对方挂断）等\n通知系统优化：多通道推送保障（FCM+三星+APNs），确保不错过重要来电\n性能优化：推送通道优化、低端机型编解码优化、长时间通话电池优化\n社交关系链拓展：通话中邀请群外成员、临时邀请链接、通话链接社交分享、全选成员一键呼叫，降低社交组织成本",
        axureUrl: "https://codesign.qq.com/s/627363398067674",
        designUrl: "",
        createdAt: "2024.12 - 2025.03"
    }
];

const newInit = '        function init() {\n            console.log("=== 开始初始化 ===");\n            // 直接使用硬编码的项目数据\n            projects = [...hardcodedProjects];\n            console.log("项目数:", projects.length);\n            // 渲染项目\n            renderProjects();\n            // 确保显示正确的页面\n            listPage.classList.remove("hidden");\n            detailPage.classList.add("hidden");\n            console.log("=== 初始化完成 ===");\n        }';

const initPattern = /\/\/ 页面加载后初始化[\s\S]*?<\/script>/;

const finalContent = contentWithoutEditFunctions.replace(initPattern, newInit);

fs.writeFileSync(output, finalContent, 'utf-8');
console.log('清理完成：');
console.log('- 删除了 Form Page');
console.log('- 移除了编辑和删除按钮');
console.log('- 移除了编辑相关函数');
console.log('- 更新了 init 函数使用硬编码项目');
console.log(`输出文件: ${output}`);

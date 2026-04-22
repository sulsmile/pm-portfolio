// 在浏览器控制台中运行此脚本，自动添加AI智能助手项目到作品集

const aiProject = {
    name: "AI智能助手",
    role: "产品经理",
    background: `AI智能助手是一款基于大语言模型的综合性AI应用，旨在为用户提供一站式智能服务体验。

该项目集成了对话、创作、信息获取等多种AI能力，通过直观的对话界面和丰富的功能模块，让用户能够轻松使用AI技术解决日常工作与生活中的各类问题。产品采用侧边栏历史记录设计，底部标签导航，确保多功能的便捷切换与流畅使用体验。`,
    userProblem: `在AI技术快速发展的背景下，用户面临以下痛点：

• **工具分散**：需要在不同APP间切换才能使用不同AI功能（聊天、写作、翻译等）
• **学习成本高**：每款AI工具有独立的操作逻辑和界面，增加使用门槛
• **场景割裂**：对话、创作、信息获取等场景无法自然衔接，降低效率
• **历史管理困难**：跨设备的对话记录和创作内容难以统一管理和查找
• **语音交互缺失**：多数AI工具仅支持文本输入，无法满足移动场景下的便捷输入需求`,
    myWork: `作为该项目的产品经理，我负责以下工作：

• **需求调研与分析**：通过用户访谈和竞品分析，确定12个核心功能模块及优先级
• **产品设计**：完成完整的Axure交互原型，包含功能结构图、用户流程和界面设计
• **功能规划**：设计从基础对话到多模态交互（语音、图片）的功能迭代路线
• **用户体验优化**：设计侧边栏历史记录、底部标签导航等关键交互模式
• **需求文档编写**：输出详细的产品需求文档（PRD），明确各功能的验收标准`,
    solution: `采用"对话为核心、多模态扩展"的产品策略：

**核心架构**：
• 以智能对话为统一入口，降低用户学习成本
• 侧边栏管理历史记录，支持快速回顾和继续对话
• 底部标签页设计，实现功能间的无缝切换

**功能矩阵**：
• **基础层**：文本对话、历史记录、每日新鲜事（信息获取）
• **创作层**：AI写作、图片生成、图片转文字（OCR）
• **交互层**：发送语音、语音聊天（多模态输入）
• **工具层**：翻译、天气查询（实用工具）
• **管理层**：新闻后台（内容运营）

**技术选型考量**：
• 支持文本与语音的双向交互，适应不同使用场景
• 集成OCR能力，实现图片信息的提取与理解
• 提供API接口设计，便于后续功能扩展和第三方集成`,
    highlights: `• 12个核心功能模块，覆盖对话、创作、信息获取三大场景
• 多模态交互设计，支持文本、语音、图片三种输入方式
• 侧边栏历史记录 + 底部标签导航，提升多任务使用效率
• 完整的Axure高保真原型，包含功能结构图和详细交互流程
• 从MVP到完整产品的清晰功能迭代规划`,
    axureUrl: "https://39ilcq.axshare.com",
    designUrl: "",
    createdAt: new Date().toISOString()
};

// 添加到localStorage
function addAIProject() {
    const saved = localStorage.getItem('pmPortfolioProjects');
    let projects = saved ? JSON.parse(saved) : [];

    // 检查是否已存在同名项目
    const exists = projects.some(p => p.name === aiProject.name);
    if (exists) {
        console.log('项目 "' + aiProject.name + '" 已存在，如需更新请先删除旧项目');
        return false;
    }

    // 添加到列表开头
    projects.unshift(aiProject);
    localStorage.setItem('pmPortfolioProjects', JSON.stringify(projects));

    console.log('✅ AI智能助手项目已成功添加到作品集！');
    console.log('项目包含以下内容：');
    console.log('- 项目名称:', aiProject.name);
    console.log('- 角色:', aiProject.role);
    console.log('- 功能模块: 12个（基本聊天、语音、写作、图片生成等）');
    console.log('- Axure原型:', aiProject.axureUrl);
    console.log('');
    console.log('请刷新页面查看新添加的项目');

    return true;
}

// 执行添加
addAIProject();

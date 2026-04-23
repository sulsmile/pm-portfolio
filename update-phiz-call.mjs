import fs from 'fs';

// 读取文件
const content = fs.readFileSync('index.html', 'utf-8');

// 新的painPoints内容
const newPainPoints = `            painPoints: \`收不到推送通知：app在后台或者关闭状态下，收不到来电推送，无法直接接听
网络异常痛点：通话突然断开，不知道是网络问题还是对方挂断，情感交流被打断，产生焦虑
基础体验较差：通话整体流程和细节体验与成熟产品存在差距，通话状态变更，快捷回复，通话结束场景等细节考虑不足
社交关系链拓展困难：想邀请朋友加入通话但不在群里，需要逐个私聊邀请，操作繁琐\`,`;

// 新的personas内容
const newPersonas = `            personas: \`核心社交圈（主要）
扩展社交圈（次要）
轻社交圈（扩展）
同好社交圈（扩展）\`,`;

// 新的userJourney内容
const newUserJourney = `            userJourney: \`情感维系场景（Ana异地睡前视频）：晚上10点习惯性检查手机→整理背景调整光线→点击视频通话等待接听→分享今天的事以及情感交流→互道晚安带着满足感入睡（痛点：通话异常结束）
朋友聚会讨论（Lucas组织朋友群）：计划周末聚会需要协调→在朋友群群组通话→讨论时间地点投票决定→确认计划分享到群里（痛点：通话不稳定）
临时问事协调（Mariana确认信息）：需要确认信息想到对方→直接拨打等待接听→询问问题得到答案→挂断（痛点：未能及时收到来电）
学习小组讨论（Julia设计小组）：准备学习讨论整理议题→在学习群群组通话→分享屏幕讨论作业→记录不完整需要手动记录（痛点：屏幕共享看不清，邀请更多成员加入步骤繁琐）\`,`;

// 新的userStories内容
const newUserStories = `            userStories: \`作为核心社交圈用户（Ana），我想要网络断开预警和智能重连，以便避免情感交流突然中断的焦虑，保持通话连续性
作为扩展社交圈用户（Lucas），我想要群通话便捷，快速的组织群通话
作为轻社交圈用户（Mariana），我想要及时收到来电，通话稳定进行
作为同好社交圈用户（Julia），我想要群组互动便捷，能够邀请群外成员和进行通话链接分享，以便快速组织朋友聚会，拓展社交关系链\`,`;

// 新的features内容
const newFeatures = `            features: \`基础通话体验：1V1,1VN,群组音视频通话，屏幕共享等互动功能。呼叫状态流转提示，发言者高亮，快捷回复，留言功能等体验优化
网络异常兜底：智能重连、弱网降级（自动降低画质/切音频）、明确提示原因（网络问题vs对方挂断）等
通知系统优化：多通道推送保障（FCM+三星+APNs），确保不错过重要来电
性能优化：推送通道优化、低端机型编解码优化、长时间通话电池优化
社交关系链拓展：通话中邀请群外成员、临时邀请链接、通话链接社交分享、全选成员一键呼叫，降低社交组织成本\`,`;

// 替换函数
function replacePattern(pattern, replacement, text) {
    const regex = new RegExp(pattern, 'gs');
    return text.replace(regex, replacement);
}

let updated = content;

// 替换painPoints
updated = replacePattern(
    /painPoints:\s*`[\s\S]*?`/,
    newPainPoints,
    updated
);

// 替换personas
updated = replacePattern(
    /personas:\s*`[\s\S]*?`/,
    newPersonas,
    updated
);

// 替换userJourney
updated = replacePattern(
    /userJourney:\s*`[\s\S]*?`/,
    newUserJourney,
    updated
);

// 替换userStories
updated = replacePattern(
    /userStories:\s*`[\s\S]*?`/,
    newUserStories,
    updated
);

// 替换features
updated = replacePattern(
    /features:\s*`[\s\S]*?`/,
    newFeatures,
    updated
);

// 写入文件
fs.writeFileSync('index.html', updated, 'utf-8');

console.log('Phiz Call项目数据已更新');

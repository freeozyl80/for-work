视图（View）：用户界面。
控制器（Controller）：业务逻辑
模型（Model）：数据保存

View 传送指令到 Controller
Controller 完成业务逻辑后，要求 Model 改变状态
Model 将新的数据发送到 View，用户得到反馈

1. 各部分之间的通信，都是双向的。
2. View 与 Model 不发生联系，都通过 viewModel 传递。
3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 viewModel非常厚，所有逻辑都部署在那里。

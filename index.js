// git是用来管理代码的，在公司里面用于团队协作(多人开发)
// 本地可以去生成一个仓库： git init


// 通过：git status -s查看当前文件状态
//显示的装填： 未被追踪的文件： untrack

//可以使用 clear 清除屏幕信息

// 查看状态精简命令： git status -s
// ？？这个表示当前文件未被追踪的意思

// 跟踪新文件 git add  你要追踪的文件
// A 表示当前文件已处于追踪文件了g

// M 表示当前文件已经修改了

//添加文件到暂存区    git commit -m '描述信息'
// -m 就是表示 message 的意思 命令后面的描述信息 一定要写

// 暂存已修改的文件



// 复习
// 1、 git init 初始化本地仓库 会生成 .git 隐藏文件
// 2、 git add 你要追踪的文件
// 3、 git status -s 查看状态  git status -s -> M
// 4、 git commit -m '描述信息'  一定要加  添加文件到暂存区
// 5、 git add 你要追踪的文件
// 6、一次新添加多个文件到暂存区： git add.
// 7、跳过使用暂存区，就是 git add 和 git commit 两个命令的复合写法，git commit -a -m "描述信息"（用的比较多）


// add 命令的作用
//1、可以添加新的文件
//2、文件做了修改之后，本地提交之前还需要add一下
//3、多人合并代码之后，解决冲突之后，提交以下，还需要add一下


// git checkout --文件名  撤销代码
// git reset HEAD  从暂存区中移除对应的文件
// git commit -a -m "描述消息"
// git rm -f "移除信息" 从 git 仓库和工作区中移除 index.js 文件
// git rm --cached index.css  只从 git 仓库中移除 index.css 但保留工作区中的 index.css 文件
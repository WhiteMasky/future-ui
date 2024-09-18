import { List, Avatar } from 'antd';

// 任务数组
const quests = [
  { title: 'Find the Cyber Module', status: 'incomplete' },
  { title: 'Hack the Security System', status: 'complete' },
];

function QuestLog() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={quests}
      renderItem={quest => (
        <List.Item
          style={{
            backgroundColor: '#111', // 深色背景
            border: '1px solid #333', // 深色边框
            borderRadius: '8px', // 圆角边框
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)', // 霓虹蓝色阴影
            marginBottom: '10px', // 项目间距
            transition: 'transform 0.3s ease', // 动画过渡
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)'; // 悬停时放大效果
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // 恢复原始大小
          }}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://i.imgur.com/Q9qFt3v.png" />}
            title={
              <a
                href=""
                style={{
                  color: quest.status === 'complete' ? '#00FFFF' : '#FF00FF', // 霓虹色标题文字
                  fontFamily: '"Courier New", Courier, monospace', // 等宽字体
                  textDecoration: 'none', // 移除下划线
                  transition: 'color 0.3s ease', // 平滑过渡
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4CAF50'; // 悬停时霓虹绿色文字
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = quest.status === 'complete' ? '#00FFFF' : '#FF00FF'; // 恢复原始颜色
                }}
              >
                {quest.title}
              </a>
            }
            description={
              <span
                style={{
                  color: quest.status === 'complete' ? '#00FF00' : '#FF00FF', // 霓虹色状态文字
                  fontFamily: '"Courier New", Courier, monospace',
                }}
              >
                {`Status: ${quest.status}`}
              </span>
            }
          />
        </List.Item>
      )}
    />
  );
}

export default QuestLog;

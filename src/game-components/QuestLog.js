import { List, Avatar } from 'antd';

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
        <List.Item className={`text-${quest.status === 'complete' ? 'green' : 'red'}-500`}>
          <List.Item.Meta
            avatar={<Avatar src="https://i.imgur.com/Q9qFt3v.png" />}
            title={<a href="">{quest.title}</a>}
            description={`Status: ${quest.status}`}
          />
        </List.Item>
      )}
    />
  );
}

export default QuestLog;

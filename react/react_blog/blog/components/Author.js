import { Avatar, Divider } from 'antd'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="http://www.zchstudy.club/assets/img/study.45cfea3c.jpeg"></Avatar></div>
      <div className="author-introduction">
        黑色的背后是黎明 以为来日方长所以别把梦吵醒 时间它继续飞行 下一站机场门外 拥抱你的背影
        <Divider>社交帐号</Divider>
        <a href="http://image.jinghao.xyz/blog/20200519/BSLQAoAgMJua.jpeg"><Avatar size={38} icon="github" className="account" /></a>
        <Avatar size={38} icon="qq" className="account" />
        <Avatar size={38} icon="smile" className="account" />
      </div>
    </div>
  )
}

export default Author
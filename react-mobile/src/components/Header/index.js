import {Flex} from 'antd-mobile'
import styles  from './index.module.less'

const Header=()=>{
  return  <Flex justify='center' className={styles.header}>
      <Flex.Item> 菜单 </Flex.Item>
      <Flex.Item> logo </Flex.Item>
      <Flex.Item> english </Flex.Item>
</Flex>
}

export default Header
import React,{useState} from "react";
import { View } from "@tarojs/components";
import { Cell,Image,TreeSelect,Rate ,Slider  } from "@taroify/core"
import { ChatOutlined } from "@taroify/icons"

import './index.scss'

const Index = () => {
  const [tabValue, setTabValue] = useState(0)
  const [value, setValue] = useState(0)
  return (
    <View className='wrapper'>
      <Cell title='单元格'>内容</Cell>
      <Image style={{ width: "100px", height: "100px" }} src='https://img.yzcdn.cn/vant/cat.jpeg' />
      <TreeSelect tabValue={tabValue} value={value} onTabChange={setTabValue} onChange={setValue}>
      <TreeSelect.Tab title='浙江'>
        <TreeSelect.Option value={0}>杭州</TreeSelect.Option>
        <TreeSelect.Option value={1}>温州</TreeSelect.Option>
        <TreeSelect.Option value={2} disabled>
          宁波
        </TreeSelect.Option>
        <TreeSelect.Option value={3}>义乌</TreeSelect.Option>
      </TreeSelect.Tab>
      <TreeSelect.Tab title='江苏'>
        <TreeSelect.Option value={4}>南京</TreeSelect.Option>
        <TreeSelect.Option value={5}>无锡</TreeSelect.Option>
        <TreeSelect.Option value={6}>徐州</TreeSelect.Option>
        <TreeSelect.Option value={7}>苏州</TreeSelect.Option>
      </TreeSelect.Tab>
      <TreeSelect.Tab title='福建' disabled>
        <TreeSelect.Option value={8}>泉州</TreeSelect.Option>
        <TreeSelect.Option value={9}>厦门</TreeSelect.Option>
      </TreeSelect.Tab>
    </TreeSelect>
    <View className='taroify-ellipsis'>
      这是一段最多显示两行的文字，多余的内容会被省略 这是一段最多显示两行的文字，
      多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字
    </View>
    <ChatOutlined size='40' />
    <Rate className='custom-color' defaultValue={3} allowHalf size={25}  />
    <Slider defaultValue={50} />
    </View>
  );
};

export default Index;

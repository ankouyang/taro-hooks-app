import React, {useEffect } from 'react';
import { useModal, useApp } from 'taro-hooks';
import {View}  from "@tarojs/components";

export default () => {
  const [appInstance] = useApp(true);
  
  const [show] = useModal({
    title: 'useApp',
    content: '您是否要随机修改当前全局变量',
    mask: true,
  });

  useEffect(() => {
    show({
      content: `当前获取示例(${
        appInstance?.config?.window?.navigationBarTitleText    || ''
      }): 页面个数(${appInstance?.config?.pages.length || 0})`,
    });
  }, [show, appInstance]);
  return (
    <>
       <View>{ appInstance?.config?.window?.navigationBarTitleText}</View>
    </>
  );
};

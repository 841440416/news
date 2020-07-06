import React from 'react';
import { Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default (): React.ReactNode => (
  <PageHeaderWrapper content=" 这个页面只有 admin 权限才能查看">
    <Card>
     
    </Card>
  </PageHeaderWrapper>
);

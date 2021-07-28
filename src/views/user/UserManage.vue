<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '16px' }">
    <a-table :columns="columns" :data-source="usersModel">
      <span slot="avatar" slot-scope="avatar">
        <a-avatar :src="avatar" size="large" />
      </span>
      <span slot="createTime" slot-scope="text">
        <a-tooltip placement="top">
          {{ text | timeAgo }}
        </a-tooltip>
      </span>
    </a-table>
  </a-card>
</template>

<script>
import userApi from '@/api/user'

export default {
  data() {
    return {
      usersModel: [],
      columns: [
        {
          dataIndex: 'username',
          title: '用户名'
        },
        {
          dataIndex: 'nickname',
          title: '昵称'
        },
        {
          dataIndex: 'avatar',
          title: '头像',
          scopedSlots: { customRender: 'avatar' }
        },
        {
          dataIndex: 'email',
          title: '邮箱'
        },
        {
          dataIndex: 'createTime',
          title: '创建时间',
          scopedSlots: { customRender: 'createTime' }
        }
      ],
      queryParam: {
        page: 0,
        size: 10
      }
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      userApi
        .getUserList(this.queryParam.page, this.queryParam.size)
        .then(result => (this.usersModel = result.data.data.content))
    }
  }
}
</script>

<style scoped></style>

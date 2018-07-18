<template>
  <div class="company-visitors">
    <!-- 没有数据 -->
    <div v-if="noDataShow" class="no-data">
      <img src="../../assets/images/no-visitor.png" alt="">
      <div class="no-visitor">您还没有访客</div>
      <div class="add-visitor">点击下方“+”创建访客</div>
    </div>

    <Scroll
      ref="scroll"
      :refreshData="[]"
      :pullUp="false"
      @pullingDown="loadRefresh">
      <div class="title-wrap">
        <flexbox :gutter="0">
          <flexbox-item>
            <div class="today-visitor">今日<span>{{ myDay }}</span></div>
          </flexbox-item>
          <flexbox-item>
            <div class="visitor-total"><span>{{ todayCount }}</span>位访客</div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="visitor-content-wrap">
        <div v-for="(item,index) in todayVisitors" :key="index">
          <!-- <div v-if="item.data_status === 'APPROVED'" class="approval-bg-color">
            <div class="content-wrap" @click="handleDetails(item)">
              <flexbox orient="vertical">
                <flexbox-item>
                  <flexbox class="item-1-wrap">
                    <flexbox-item><div class="approval-visitor-name">{{ item.visitor_name }}</div></flexbox-item>
                    <flexbox-item>
                      <div class="visitor-state">
                        <div class="not-visit clearfix home-common">
                          <div>{{ item.data_status_name }}</div>
                          <div><img src="../../assets/images/not-visit.png" alt="" class="state-img"></div>
                        </div>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </flexbox-item>
                <flexbox-item class="item-2-wrap"><div class="visitor-reson">{{ item.visit_aims_name }}</div></flexbox-item>
                <flexbox-item>
                  <flexbox class="item-3-wrap">
                    <flexbox-item>
                      <div v-if="((new Date(item.end_date.split(' ')[0]).getTime() - new Date(item.begin_date.split(' ')[0]).getTime()) / 1000 / 60 / 60 / 24) >= 1" class="time-wrap">
                        <div>{{ item.begin_date }}</div>
                        <div>至</div>
                        <div>{{ item.end_date }}</div>
                      </div>
                      <div v-else>{{ item.begin_date }}</div>
                    </flexbox-item>
                    <flexbox-item><div class="invite-people">{{ item.initiator_name }}</div></flexbox-item>
                  </flexbox>
                </flexbox-item>
              </flexbox>
            </div>
          </div>
          <div v-else> -->
          <div class="content-wrap" @click="handleDetails(item)">
            <flexbox orient="vertical">
              <flexbox-item>
                <flexbox class="item-1-wrap">
                  <flexbox-item><div class="visitor-name">{{ item.visitor_name }}</div></flexbox-item>
                  <flexbox-item>
                    <div class="visitor-state">
                      <div v-if="item.data_status === 'REFUSED'" class="already-refuse clearfix home-common">
                        <div>{{ item.data_status_name }}</div>
                        <div><img src="../../assets/images/reject.png" alt="" class="state-img"></div>
                      </div>
                      <div v-else-if="item.data_status === 'APPROVING'" class="pending-approval clearfix home-common">
                        <div>{{ item.data_status_name }}</div>
                        <div><img src="../../assets/images/waiting.png" alt="" class="state-img"></div>
                      </div>
                      <div v-else-if="item.data_status === 'APPROVED'" class="not-visit clearfix home-common">
                        <div>{{ item.data_status_name }}</div>
                        <div><img src="../../assets/images/not-visit.png" alt="" class="state-img"></div>
                      </div>
                      <div v-else class="approval clearfix home-common">
                        <div>{{ item.data_status_name }}</div>
                        <div><img src="../../assets/images/approval.png" alt="" class="state-img"></div>
                      </div>
                    </div>
                  </flexbox-item>
                </flexbox>
              </flexbox-item>
              <flexbox-item class="item-2-wrap"><div class="visitor-reson">{{ item.visit_aims_name }}</div></flexbox-item>
              <flexbox-item>
                <flexbox class="item-3-wrap">
                  <flexbox-item>
                    <div v-if="((new Date(item.end_date.split(' ')[0]).getTime() - new Date(item.begin_date.split(' ')[0]).getTime()) / 1000 / 60 / 60 / 24) >= 1" class="time-wrap">
                      <div>{{ item.begin_date }}</div>
                      <div>至</div>
                      <div>{{ item.end_date }}</div>
                    </div>
                    <div v-else>{{ item.begin_date }}</div>
                  </flexbox-item>
                  <flexbox-item><div class="invite-people">{{ item.initiator_name }}</div></flexbox-item>
                </flexbox>
              </flexbox-item>
            </flexbox>
          </div>
          <!-- </div> -->
        </div>
      </div>
      <div :class="afterVisitors.length === 0?'dn':'db'" class="visitor-after">
        <divider>以后</divider>
      </div>
      <div class="after-content-wrap">
        <div v-for="(item,index) in afterVisitors" :key="index" class="after-wrap" @click="handleDetails(item)">
          <flexbox orient="vertical">
            <flexbox-item>
              <flexbox class="item-1-wrap">
                <flexbox-item><div class="visitor-name">{{ item.visitor_name }}</div></flexbox-item>
                <flexbox-item>
                  <div class="visitor-state">
                    <div v-if="item.data_status === 'APPROVING'" class="pending-approval clearfix home-common">
                      <div>{{ item.data_status_name }}</div>
                      <div><img src="../../assets/images/waiting.png" alt="" class="state-img"></div>
                    </div>
                    <div v-else-if="item.data_status === 'REFUSED'" class="already-refuse clearfix home-common">
                      <div>{{ item.data_status_name }}</div>
                      <div><img src="../../assets/images/reject.png" alt="" class="state-img"></div>
                    </div>
                    <div v-else-if="item.data_status === 'APPROVED'" class="not-visit clearfix home-common">
                      <div>{{ item.data_status_name }}</div>
                      <div><img src="../../assets/images/not-visit.png" alt="" class="state-img"></div>
                    </div>
                    <div v-else class="approval clearfix home-common">
                      <div>{{ item.data_status_name }}</div>
                      <div><img src="../../assets/images/approval.png" alt="" class="state-img"></div>
                    </div>
                  </div>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item class="item-2-wrap"><div class="visitor-reson">{{ item.visit_aims_name }}</div></flexbox-item>
            <flexbox-item>
              <flexbox class="item-3-wrap">
                <flexbox-item>
                  <div v-if="((new Date(item.end_date.split(' ')[0]).getTime() - new Date(item.begin_date.split(' ')[0]).getTime()) / 1000 / 60 / 60 / 24) >= 1" class="time-wrap">
                    <div>{{ item.begin_date }}</div>
                    <div>至</div>
                    <div>{{ item.end_date }}</div>
                  </div>
                  <div v-else>{{ item.begin_date }}</div>
                </flexbox-item>
                <flexbox-item><div class="invite-people">{{ item.initiator_name }}</div></flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { fetchIndexList } from '../../api/home'
import Scroll from '../../components/Scroll'
import { XButton, CellFormPreview, Group, Cell, Flexbox, FlexboxItem, Divider, Popup } from 'vux'
export default {
  name: 'CompanyVisitor',
  components: {
    XButton,
    CellFormPreview,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Divider,
    Popup,
    Scroll,
  },
  data () {
    return {
      // 部门/公司访客
      todayVisitors: [],
      todayCount: undefined,
      afterVisitors: [],
      // 存储今日周几
      myDay: undefined,
      noDataShow: true,
    }
  },
  watch: {
    '$route': 'loadRefresh',
  },
  created () {
    this.loadRefresh()
    console.log('部门')

    // 获取周几
    let week = new Date().getDay()
    if (week === 0) {
      this.myDay = '周日'
    } else if (week === 1) {
      this.myDay = '周一'
    } else if (week === 2) {
      this.myDay = '周二'
    } else if (week === 3) {
      this.myDay = '周三'
    } else if (week === 4) {
      this.myDay = '周四'
    } else if (week === 5) {
      this.myDay = '周五'
    } else if (week === 6) {
      this.myDay = '周六'
    }
    console.log('周几', week)
  },
  methods: {
    // 跳转到详情页
    handleDetails (item) {
      this.$router.push({
        name: 'Details',
      })
      console.log(item)
      // sessionStorage存储item
      const visitorItem = JSON.stringify(item)
      sessionStorage.setItem('itemObj', visitorItem)
    },

    loadRefresh () {
      if (this.todayVisitors.length || this.afterVisitors.length) {
        this.$refs.scroll.update(false)
      }
      // 获取角色
      const roleCode = sessionStorage.getItem('userRole')

      // 获取sessionStorage存储的用户信息
      const obj = sessionStorage.getItem('userMessage')
      const userMessage = JSON.parse(obj)

      // 获取我的访客数据
      let headers = {
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + userMessage.token },
      }

      // 根据角色获取部门／公司数据
      let paramsDepartment
      if (roleCode === 'MANAGER') {
        paramsDepartment = {
          'params': {
            'p_employee_code': userMessage.userInfo.empCode,
            'p_role_code': 'MANAGER',
            'p_type': 'DEPARTMENT',
          },
        }
      } else if (roleCode === 'ENSURE_SAFETY') {
        paramsDepartment = {
          'params': {
            'p_employee_code': userMessage.userInfo.empCode,
            'p_role_code': 'ENSURE_SAFETY',
            'p_type': 'COMPANY',
          },
        }
      }

      fetchIndexList(paramsDepartment, headers)
        .then(
          (res) => {
            if (res.after_count !== 0 || res.today_count !== 0) {
              this.noDataShow = false
            } else {
              this.noDataShow = true
            }
            this.todayVisitors = res.today_visitors
            this.afterVisitors = res.after_visitors
            this.todayCount = res.today_count
            console.log('部门／公司访客', res)
          }
        )
        .catch(
          (err) => {
            console.log(err)
          }
        )
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/base.styl';
.company-visitors{
  //position :relative;
  height :100%;
}

.title-wrap{
  padding :0 15px;
  height:42px;
  line-height:42px;
  .today-visitor{
    font-size :14px;
    color:#1F8CEB;
    font-weight :bold;
    span{
      font-weight :normal;
      padding-left : 5px;
      font-size :12px;
    }
  }
  .visitor-total{
    text-align :right;
    font-size: 14px;
    span{
      font-weight :bold;
      color:#4A4A4A;
    }
}
}

.visitor-after{
  padding :20px 0 20px 15px;
  .vux-divider{
    padding :0;
    margin :0;
    width :100%;
    font-size: 14px;
    color: #6D7A80;
    &:before{
      display :none;
    }
    &:after{
      width :100%;
    }
  }
}

.vux-flexbox .vux-flexbox-item{
  margin-top: 0!important;
}

.visitor-content-wrap{
  margin :0 11px;
  .approval-bg-color{
    background #fff;
    box-shadow: 0 2px 4px 0 rgba(31,140,235,0.30);
    .content-wrap{
      background :url("../../assets/images/appending-approval.png") no-repeat 260px bottom;
      background-size:89px 69px;
    }
    .approval-visitor-name{
      font-weight :bold;
      padding-left:18px;
      background :url("../../assets/images/approval-bg.png") no-repeat left center;
      background-size:13px 14px;
      font-size: 16px;
      color: #4A4A4A;
    }
    .visitor-reson{
      color: #4A4A4A !important;
    }
  }
  .content-wrap{
    background :#F6F9FC;
    box-shadow: 0 2px 4px 0 #EEE;
    border-radius: 2px;
    padding :0 20px;
    margin-bottom :5px;
    .item-1-wrap{
      line-height :48px;
      .visitor-name{
        font-weight :bold;
        padding-left:18px;
        background :url("../../assets/images/visitor-bg.png") no-repeat left center;
        background-size:13px 14px;
        font-size: 16px;
        color: #9B9B9B;
      }
      .visitor-state{
        font-size: 14px;
      }
    }
    .item-2-wrap{
      .visitor-reson{
        font-size: 14px;
        color: #9B9B9B;
      }
    }
    .item-3-wrap{
      line-height :48px;
      font-size: 14px;
      color: #6D7A80;
      .invite-people{
        text-align : right ;
      }
    }
  }
}

.after-content-wrap{
  background: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #EEEEEE, inset 0 -1px 0 0 #EEEEEE;
  border-radius: 2px;
  .after-wrap{
    padding:0 15px;
    border-bottom :solid 1px #eee;
    &:last-child{
      margin-bottom :15px;
    }
    .item-1-wrap{
      line-height :48px;
      .visitor-name{
        font-weight :bold;
        padding-left:18px;
        background :url("../../assets/images/visitor-bg.png") no-repeat left center;
        background-size:13px 14px;
        font-size: 16px;
        color: #4A4A4A;
      }
      .visitor-state{
        font-size: 14px;
      }
    }
    .item-2-wrap{
      .visitor-reson{
        font-size: 14px;
        color: #4A4A4A;
      }
    }
    .item-3-wrap{
      line-height :48px;
      font-size: 14px;
      color: #6D7A80;
      .invite-people{
        text-align : right ;
      }
    }
  }
}

.time-wrap{
  padding :12px 0;
  line-height :20px;
}

.home-common{
  >div{
    float :right;
    display :inline;
  }
}

.state-img{
  display :inline-block;
  vertical-align :middle;
  width :10px;
  height :14px;
  margin-right :5px;
}

//待审批
.pending-approval{
  color:#F5A623;
}

//已拒绝
.already-refuse{
  color:#F96F68;
}

//未到访
.not-visit{
  color: #1F8CEB;
}

//已接待
.approval{
  color: #D2D2D2;
}

//今日待审批
div.visitor-content-wrap{
  .pending-approval-bg{
    background-color :#fff;
    background-image :url("../../assets/images/approval.png") no-repeat;
    box-shadow: 0 2px 4px 0 rgba(31,140,235,0.30);
  }
}

//没有数据
.no-data{
  position :absolute;
  top:0;
  z-index :2;
  background :#fafafa;
  img{
    display :block;
    height :190px;
    margin-top :90px;
  }
  .no-visitor{
    padding :8px 0 12px;
    font-size: 18px;
    color: #6D7A80;
    text-align :center;
  }
  .add-visitor{
    font-size: 14px;
    color: #9B9B9B;
    text-align: center;
  }
}
</style>

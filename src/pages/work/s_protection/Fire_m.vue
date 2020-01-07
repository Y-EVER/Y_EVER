<template>
  <div>
    <div class="pad_15 flex flex_b_c">
      <div class="w_20">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append">查询</el-button>
        </el-input>
      </div>
      <div>
        <el-button size="small" type="primary" @click="dialogFormVisible = true">添加器材</el-button>
        <el-button size="small" type="primary" @click="dialogTableVisible = true">消防记录</el-button>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 98%;margin:20px auto">
      <el-table-column prop="name" label="器材名称" width="180"></el-table-column>
      <el-table-column prop="address" label="区域地点"></el-table-column>
      <el-table-column prop="p_name" label="维护人" width="180"></el-table-column>
      <el-table-column prop="phone" label="维护电话" width="180"></el-table-column>
      <el-table-column prop="date" label="维护时间" width="180"></el-table-column>
      <el-table-column prop="beizhu" label="备注" width="180"></el-table-column>
    </el-table>
    <div class="pad_15 block t_a_center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[50, 100, 150, 200,250,300,350,400]"
        :page-size="50"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
    <!-- 添加器材弹框 -->
    <div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form class="form_one">
          <div class="d_fix">
            <el-form-item class="d_fix w_50" label="活动名称">
              <el-input placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item class="d_fix w_50" label="活动名称">
              <el-input placeholder="请输入内容"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog title="消防记录" :visible.sync="dialogTableVisible">
        <el-table :data="gridData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>
					
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      tableData: [
        {
          name: "消防栓",
          address: "上海市普陀区金沙江路 1518 弄",
          p_name: "王小虎",
          phone: "15102354584",
          date: "2016-05-02",
          beizhu: "损坏"
        }
      ],
      gridData: [
        {
          date: "2016-05-02",
          name: "张三",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "历史",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogFormVisible: false,
      dialogTableVisible: false
    };
  }
};
</script>

<style lang="less" scoped>
</style>
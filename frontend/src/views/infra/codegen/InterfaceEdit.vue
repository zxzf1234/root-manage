<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="1200px">
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="handleSaveInterface"> 保存 </el-button>
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button @click="handleAddParam">添加参数</el-button>
        <el-button @click="handleBatchAddRelatedColumn">批量添加关联字段</el-button>
        <el-button @click="handleDeleteParam">删除参数</el-button>
        <el-button @click="handleAddSubclass">添加子类</el-button>
        <el-button @click="handleDeleteSubclass">删除子类</el-button>
        <el-button @click="handleAddValidation">添加校验</el-button>
        <el-button @click="handleDeleteValidation">删除校验</el-button>
        <el-button @click="handleCompletionValidation">自动补全校验</el-button>
      </el-form-item>
    </el-form>
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :inline="true"
      :model="formData"
      :rules="formRules"
      label-width="auto"
    >
      <el-form-item label="模块" prop="moduleId">
        <el-tree-select
          v-model="formData.moduleId"
          :data="moduleTree"
          :props="defaultProps"
          check-strictly
          default-expand-all
          placeholder="请选择模块"
          value-key="Id"
        />
      </el-form-item>

      <el-form-item label="接口名" prop="name">
        <el-input
          v-model="formData.name"
          placeholder="请输入名称"
          @keyup="formData.name = formData.name.replace(/[^a-zA-Z]/g, '')"
          @blur="interfaceNameBlur"
        />
      </el-form-item>

      <el-form-item label="描述" prop="comment">
        <el-input
          v-model="formData.comment"
          placeholder="请输入描述"
          @blur="formData.comment = formData.comment.trim()"
        />
      </el-form-item>

      <el-form-item label="调用方法" prop="method">
        <el-select v-model="formData.method">
          <el-option label="post" value="post" />
          <el-option label="get" value="get" />
          <el-option label="delete" value="delete" />
          <el-option label="put" value="put" />
          <el-option label="download" value="download" />
          <el-option label="upload" value="upload" />
        </el-select>
      </el-form-item>

      <el-form-item label="权限" prop="authorize">
        <el-input
          v-model="formData.authorize"
          placeholder="请输入权限"
          @blur="formData.authorize = formData.authorize.trim()"
        />
      </el-form-item>

      <el-form-item prop="isTransaction" label="是否开启事务">
        <el-checkbox v-model="formData.isTransaction" false-value="false" true-value="true" />
      </el-form-item>
      <el-form-item prop="isImport" label="是否为导入">
        <el-checkbox
          v-model="formData.isImport"
          false-value="false"
          true-value="true"
          @change="handleIsImport"
        />
      </el-form-item>
    </el-form>
    <el-tabs v-model="tabActiveName" type="card">
      <el-tab-pane label="入参" name="inputParam">
        <el-form
          ref="inputParamRef"
          v-loading="formLoading"
          :inline="true"
          :model="formData"
          :rules="formRules"
          label-width="90px"
        >
          <el-row>
            <el-col :span="8">
              <el-form-item label="入参类型" prop="inputType">
                <el-select v-model="formData.inputType">
                  <el-option label="void" value="void" />
                  <el-option label="参数" value="param" />
                  <el-option label="VO类" value="VOClass" />
                  <el-option label="List<VO类>" value="VOClassList" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="入参继承类" style="display: flex" prop="inputExtendClass">
                <div style="display: flex">
                  <el-input v-model="formData.inputExtendClass" disabled class="!w-140px" />
                  <el-button @click="handleAddExtendClass()"> 添加 </el-button>
                  <el-button @click="formData.inputExtendClass = ''"> 置空 </el-button>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-checkbox
                label="入参传入HttpServlet"
                v-model="formData.inputServlet"
                false-value="false"
                true-value="true"
              />
            </el-col>
          </el-row>
        </el-form>
        <el-table
          ref="inputTableRef"
          :data="formData.inputParams"
          height="700"
          highlight-current-row
          row-key="id"
          @current-change="(row) => handleCurrentParamChange(row, formData.inputParams)"
          :row-style="rowStyle"
        >
          <el-table-column type="expand">
            <template #default="scope">
              <el-table
                highlight-current-row
                @current-change="(row) => handleCurrentValidationChange(row, scope.row.validations)"
                :data="scope.row.validations"
                row-key="id"
                style="width: 1100px"
                class="mx-10"
                :row-style="rowStyle"
              >
                <el-table-column label="校验注解" min-width="30%" align="center">
                  <template #default="prop">
                    <el-select v-model="prop.row.validation" class="!w-130px">
                      <el-option
                        v-for="item in validationChange(scope.row)"
                        :key="item"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="校验条件" align="center">
                  <template #default="prop">
                    <el-input
                      v-model="prop.row.validationCondition"
                      @blur="prop.row.validationCondition = prop.row.validationCondition.trim()"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="报错信息" align="center">
                  <template #default="prop">
                    <el-input
                      v-model="prop.row.message"
                      @blur="prop.row.message = prop.row.message.trim()"
                    />
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="参数名" min-width="10%">
            <template #default="scope">
              <el-input
                class="!w-130px"
                v-model="scope.row.name"
                @keyup="scope.row.name = scope.row.name.replace(/[^a-zA-Z]/g, '')"
                @blur="scope.row.name = scope.row.name.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="参数描述" min-width="10%">
            <template #default="scope">
              <el-input
                class="!w-140px"
                v-model="scope.row.comment"
                @blur="scope.row.comment = scope.row.comment.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="是否是List" min-width="6%">
            <template #default="scope">
              <el-checkbox v-model="scope.row.isList" false-value="false" true-value="true" />
            </template>
          </el-table-column>
          <el-table-column label="参数类型" min-width="11%">
            <template #default="scope">
              <el-select v-model="scope.row.variableType" class="!w-140px">
                <el-option
                  v-for="item in variableTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </template>
          </el-table-column>

          <el-table-column label="关联字段" min-width="20%">
            <template #default="scope">
              <el-input v-model="scope.row.relatedColumn" disabled style="width: 70%" />
              <el-button @click="handleAddRelatedColumn(scope)"> 添加 </el-button>
            </template>
          </el-table-column>
          <el-table-column label="示例" min-width="10%">
            <template #default="scope">
              <el-input
                class="!w-140px"
                v-model="scope.row.example"
                @blur="scope.row.example = scope.row.example.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="前端必传" min-width="6%">
            <template #default="scope">
              <el-checkbox v-model="scope.row.required" false-value="false" true-value="true" />
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="出参" name="outputParam">
        <el-form
          ref="outputParamRef"
          v-loading="formLoading"
          :inline="true"
          :model="formData"
          :rules="formRules"
          row-key="id"
          label-width="90px"
        >
          <el-row>
            <el-col :span="8">
              <el-form-item label="出参类型" prop="outputType">
                <el-select v-model="formData.outputType">
                  <el-option label="void" value="void" />
                  <el-option label="参数" value="param" />
                  <el-option label="VO类" value="VOClass" />
                  <el-option label="List<VO类>" value="VOClassList" />
                  <el-option label="Page<VO类>" value="VOClassPage" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出参继承类" prop="outputExtendClass">
                <div style="display: flex">
                  <el-input v-model="formData.outputExtendClass" disabled />
                  <el-button @click="handleAddExtendClass()"> 添加 </el-button>
                  <el-button @click="formData.outputExtendClass = ''"> 置空 </el-button>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-table
          :ref="(el) => handleTableRef(el, tabActiveName)"
          :data="formData.outputParams"
          height="700"
          highlight-current-row
          row-key="id"
          @current-change="(row) => handleCurrentParamChange(row, formData.outputParams)"
          :row-style="rowStyle"
        >
          <el-table-column type="expand">
            <template #default="scope">
              <el-table
                highlight-current-row
                @current-change="(row) => handleCurrentValidationChange(row, scope.row.validations)"
                :data="scope.row.validations"
                style="width: 1100px"
                class="mx-10"
                :row-style="rowStyle"
              >
                <el-table-column label="校验注解" min-width="30%" align="center">
                  <template #default="prop">
                    <el-select v-model="prop.row.validation" class="!w-130px">
                      <el-option
                        v-for="item in validationChange(scope.row)"
                        :key="item"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="校验条件" align="center">
                  <template #default="prop">
                    <el-input
                      v-model="prop.row.validationCondition"
                      @blur="prop.row.validationCondition = prop.row.validationCondition.trim()"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="报错信息" align="center">
                  <template #default="prop">
                    <el-input
                      v-model="prop.row.message"
                      @blur="prop.row.message = prop.row.message.trim()"
                    />
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="参数名" min-width="10%">
            <template #default="scope">
              <el-input
                class="!w-130px"
                v-model="scope.row.name"
                @keyup="scope.row.name = scope.row.name.replace(/[^a-zA-Z_]/g, '')"
                @blur="scope.row.name = scope.row.name.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="参数描述" min-width="10%">
            <template #default="scope">
              <el-input
                class="!w-140px"
                v-model="scope.row.comment"
                @blur="scope.row.comment = scope.row.comment.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="是否是List" min-width="6%">
            <template #default="scope">
              <el-checkbox v-model="scope.row.isList" false-value="false" true-value="true" />
            </template>
          </el-table-column>
          <el-table-column label="参数类型" min-width="11%">
            <template #default="scope">
              <el-select v-model="scope.row.variableType" class="!w-140px">
                <el-option
                  v-for="item in variableTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </template>
          </el-table-column>

          <el-table-column label="关联字段" min-width="20%">
            <template #default="scope">
              <el-input v-model="scope.row.relatedColumn" disabled style="width: 70%" />
              <el-button @click="handleAddRelatedColumn(scope)"> 添加 </el-button>
            </template>
          </el-table-column>
          <el-table-column label="示例" min-width="10%">
            <template #default="scope">
              <el-input
                class="!w-140px"
                v-model="scope.row.example"
                @blur="scope.row.example = scope.row.example.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="前端必传" min-width="6%">
            <template #default="scope">
              <el-checkbox v-model="scope.row.required" false-value="false" true-value="true" />
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="入参子类" name="inputParamSubclass">
        <el-table
          :data="formData.inputSubclasses"
          height="700"
          highlight-current-row
          row-key="id"
          @current-change="handleCurrentInputSubclassChange"
          ref="inputSubclassTable"
          :row-style="rowStyle"
        >
          <el-table-column type="expand">
            <template #default="scopeClass">
              <el-table
                :ref="(el) => handleTableRef(el, tabActiveName)"
                highlight-current-row
                @current-change="
                  (row) => handleCurrentParamChange(row, scopeClass.row.subclassParams)
                "
                :data="scopeClass.row.subclassParams"
                row-key="id"
                style="width: 1100px"
                class="mx-10"
                :row-style="rowStyle"
              >
                <el-table-column type="expand">
                  <template #default="scope">
                    <el-table
                      highlight-current-row
                      @current-change="
                        (row) => handleCurrentValidationChange(row, scope.row.validations)
                      "
                      :data="scope.row.validations"
                      row-key="id"
                      style="width: 1100px"
                      class="mx-10"
                      :row-style="rowStyle"
                    >
                      <el-table-column label="校验注解" min-width="30%" align="center">
                        <template #default="prop">
                          <el-select v-model="prop.row.validation" class="!w-130px">
                            <el-option
                              v-for="item in validationChange(scope.row)"
                              :key="item"
                              :label="item"
                              :value="item"
                            />
                          </el-select>
                        </template>
                      </el-table-column>
                      <el-table-column label="校验条件" align="center">
                        <template #default="prop">
                          <el-input
                            v-model="prop.row.validationCondition"
                            @blur="
                              prop.row.validationCondition = prop.row.validationCondition.trim()
                            "
                          />
                        </template>
                      </el-table-column>
                      <el-table-column label="报错信息" align="center">
                        <template #default="prop">
                          <el-input
                            v-model="prop.row.message"
                            @blur="prop.row.message = prop.row.message.trim()"
                          />
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
                <el-table-column label="参数名" min-width="10%">
                  <template #default="scope">
                    <el-input
                      class="!w-110px"
                      v-model="scope.row.name"
                      @keyup="scope.row.name = scope.row.name.replace(/[^a-zA-Z]/g, '')"
                      @blur="scope.row.name = scope.row.name.trim()"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="参数描述" min-width="10%">
                  <template #default="scope">
                    <el-input
                      class="!w-110px"
                      v-model="scope.row.comment"
                      @blur="scope.row.comment = scope.row.comment.trim()"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="是否是List" min-width="8%">
                  <template #default="scope">
                    <el-checkbox v-model="scope.row.isList" false-value="false" true-value="true" />
                  </template>
                </el-table-column>
                <el-table-column label="参数类型" min-width="11%">
                  <template #default="scope">
                    <el-select v-model="scope.row.variableType" class="!w-130px">
                      <el-option
                        v-for="item in variableTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="关联字段" min-width="20%">
                  <template #default="scope">
                    <el-input v-model="scope.row.relatedColumn" disabled style="width: 70%" />
                    <el-button @click="handleAddRelatedColumn(scope)"> 添加 </el-button>
                  </template>
                </el-table-column>
                <el-table-column label="示例" min-width="10%">
                  <template #default="scope">
                    <el-input
                      class="!w-110px"
                      v-model="scope.row.example"
                      @blur="scope.row.example = scope.row.example.trim()"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="前端必传" min-width="6%">
                  <template #default="scope">
                    <el-checkbox
                      v-model="scope.row.required"
                      false-value="false"
                      true-value="true"
                    />
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="子类名" min-width="10%">
            <template #default="scopeClass">
              <el-input
                v-model="scopeClass.row.name"
                @keyup="scopeClass.row.name = scopeClass.row.name.replace(/[^a-zA-Z_]/g, '')"
                @blur="scopeClass.row.name = scopeClass.row.name.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="子类描述" min-width="10%">
            <template #default="scopeClass">
              <el-input
                v-model="scopeClass.row.comment"
                @blur="scopeClass.row.comment = scopeClass.row.comment.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="继承类" min-width="20%">
            <template #default="scopeClass">
              <el-input v-model="scopeClass.row.inheritClass" disabled style="width: 60%" />
              <el-button @click="handleAddRelatedColumn(scopeClass)"> 添加 </el-button>
              <el-button @click="handleSetEmptyColumn(scopeClass)"> 置空 </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="出参子类" name="outputParamSubclass">
        <el-table
          ref="outputSubclassTable"
          :data="formData.outputSubclasses"
          height="700"
          highlight-current-row
          row-key="id"
          @current-change="handleCurrentOutputSubclassChange"
          :row-style="rowStyle"
        >
          <el-table-column type="expand">
            <template #default="scopeClass">
              <el-table
                :ref="(el) => handleTableRef(el, tabActiveName)"
                highlight-current-row
                @current-change="
                  (row) => handleCurrentParamChange(row, scopeClass.row.subclassParams)
                "
                :data="scopeClass.row.subclassParams"
                row-key="id"
                style="width: 1100px"
                class="mx-10"
                :row-style="rowStyle"
              >
                <el-table-column type="expand">
                  <template #default="scope">
                    <el-table
                      highlight-current-row
                      @current-change="
                        (row) => handleCurrentValidationChange(row, scope.row.validations)
                      "
                      :data="scope.row.validations"
                      row-key="id"
                      style="width: 1100px"
                      class="mx-10"
                      :row-style="rowStyle"
                    >
                      <el-table-column label="校验注解" min-width="30%" align="center">
                        <template #default="prop">
                          <el-select v-model="prop.row.validation" class="!w-130px">
                            <el-option
                              v-for="item in validationChange(scope.row)"
                              :key="item"
                              :label="item"
                              :value="item"
                            />
                          </el-select>
                        </template>
                      </el-table-column>
                      <el-table-column label="校验条件" align="center">
                        <template #default="prop">
                          <el-input
                            v-model="prop.row.validationCondition"
                            @blur="
                              prop.row.validationCondition = prop.row.validationCondition.trim()
                            "
                          />
                        </template>
                      </el-table-column>
                      <el-table-column label="报错信息" align="center">
                        <template #default="prop">
                          <el-input
                            v-model="prop.row.message"
                            @blur="prop.row.message = prop.row.message.trim()"
                          />
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
                <el-table-column label="参数名" min-width="10%">
                  <template #default="scope">
                    <el-input
                      class="!w-110px"
                      v-model="scope.row.name"
                      @keyup="scope.row.name = scope.row.name.replace(/[^a-zA-Z]/g, '')"
                      @blur="scope.row.name = scope.row.name.trim()"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="参数描述" min-width="10%">
                  <template #default="scope">
                    <el-input
                      class="!w-110px"
                      v-model="scope.row.comment"
                      @blur="scope.row.comment = scope.row.comment.trim()"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="是否是List" min-width="8%">
                  <template #default="scope">
                    <el-checkbox v-model="scope.row.isList" false-value="false" true-value="true" />
                  </template>
                </el-table-column>
                <el-table-column label="参数类型" min-width="11%">
                  <template #default="scope">
                    <el-select v-model="scope.row.variableType" class="!w-130px">
                      <el-option
                        v-for="item in variableTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="关联字段" min-width="20%">
                  <template #default="scope">
                    <el-input v-model="scope.row.relatedColumn" disabled style="width: 70%" />
                    <el-button @click="handleAddRelatedColumn(scope)"> 添加 </el-button>
                  </template>
                </el-table-column>
                <el-table-column label="示例" min-width="10%">
                  <template #default="scope">
                    <el-input
                      class="!w-110px"
                      v-model="scope.row.example"
                      @blur="scope.row.example = scope.row.example.trim()"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="前端必传" min-width="6%">
                  <template #default="scope">
                    <el-checkbox
                      v-model="scope.row.required"
                      false-value="false"
                      true-value="true"
                    />
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="子类名" min-width="10%">
            <template #default="scopeClass">
              <el-input
                v-model="scopeClass.row.name"
                @blur="scopeClass.row.name = scopeClass.row.name.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="子类描述" min-width="10%">
            <template #default="scopeClass">
              <el-input
                v-model="scopeClass.row.comment"
                @blur="scopeClass.row.comment = scopeClass.row.comment.trim()"
              />
            </template>
          </el-table-column>
          <el-table-column label="继承类" min-width="20%">
            <template #default="scopeClass">
              <el-input v-model="scopeClass.row.inheritClass" disabled style="width: 60%" />
              <el-button @click="handleAddRelatedColumn(scopeClass)"> 添加 </el-button>
              <el-button @click="handleSetEmptyColumn(scopeClass)"> 置空 </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </Dialog>
  <!-- 表单弹窗：添加/修改 -->
  <InterfaceRelatedParam
    ref="relatedParamRef"
    @row-dblclick="handleRelatedParam"
    @save-param="handleBatchRelatedParam"
  />
</template>
<script lang="ts" name="InterfaceEdit" setup>
import { defaultProps, handleTree } from '@/utils/tree'
import * as CodegenApi from '@/api/infra/codegen'
import { ElTable } from 'element-plus'
import InterfaceRelatedParam from './InterfaceRelatedParam.vue'
import { camelCase } from 'lodash-es'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const relatedParamRef = ref()
const variableTypes = ref([
  { label: 'Long', value: 'Long' },
  { label: 'String', value: 'String' },
  { label: 'Integer', value: 'Integer' },
  { label: 'Double', value: 'Double' },
  { label: 'BigDecimal', value: 'BigDecimal' },
  { label: 'LocalDateTime', value: 'LocalDateTime' },
  { label: 'LocalDateTime[]', value: 'LocalDateTime[]' },
  { label: 'Boolean', value: 'Boolean' },
  { label: 'UUID', value: 'UUID' },
  { label: 'Map<String, Object>', value: 'Map<String, Object>' },
  { label: 'VO类', value: 'VOClass' },
  { label: '子类', value: 'Subclass' }
])
const initFormData = {
  id: '',
  name: '',
  comment: '',
  method: '',
  authorize: '',
  isTransaction: false,
  isImport: false,
  inputType: '',
  inputExtendClass: '',
  inputServlet: 0,
  outputExtendClass: '',
  outputType: '',
  moduleId: '',
  moduleName: '',
  createTime: '',
  operateType: 'new',
  inputParams: [],
  outputParams: [],
  inputSubclasses: [],
  outputSubclasses: []
}
const formData = ref<CodegenApi.InterfaceVO>(initFormData)
const formRules = reactive({
  moduleId: [{ required: true, message: '模块不能为空', trigger: 'change' }],
  name: [{ required: true, message: '名称不能为空', trigger: 'blur' }],
  comment: [{ required: true, message: '描述不能为空', trigger: 'blur' }],
  method: [{ required: true, message: '调用方法不能为空', trigger: 'blur' }],
  inputType: [{ required: true, message: '入参类型不能为空', trigger: 'change' }],
  outputType: [{ required: true, message: '出参类型不能为空', trigger: 'change' }]
})
const formRef = ref() // 表单 Ref
const inputParamRef = ref() // 入参 Ref
const outputParamRef = ref() // 出参 Ref
const moduleTree = ref() // 树形结构
const tableOptions = ref<CodegenApi.DatabaseTableVO[]>()
const validationCurrentRow = ref({})
const paramCurrentRow = ref({})
const inputSubclassCurrentRow = ref()
const outputSubclassCurrentRow = ref()
const paramTable = ref([])
const inputSubclassTable = ref()
const outputSubclassTable = ref()
const tabActiveName = ref('inputParam')
const relatedRef = ref()
const inputTableRef = ref()
let relateType = 0

/** 打开弹窗 */
const open = async (type: string, id?: string) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type

  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await CodegenApi.getInterface(id)
    } finally {
      formLoading.value = false
    }
  } else {
    const oldModuleId = formData.value.moduleId
    resetForm()
    formData.value.moduleId = oldModuleId
    formData.value.id = crypto.randomUUID()
  }
  // 获得模块树
  await getTree()
  await getTableOptions()
  paramTable.value[tabActiveName.value] = inputTableRef.value
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

const getTableOptions = async () => {
  tableOptions.value = await CodegenApi.getDatabaseTableList('')
}

const rowStyle = ({ row }) => {
  if (row?.operateType == 'delete') {
    return { display: 'none' }
  } else return {}
}

const handleCurrentValidationChange = (
  row: CodegenApi.InterfaceValidationVO | undefined,
  parent
) => {
  validationCurrentRow.value[tabActiveName.value] = { row: row, parent: parent }
}

const handleCurrentParamChange = (row: CodegenApi.InterfaceParamVO | undefined, parent) => {
  paramCurrentRow.value[tabActiveName.value] = { row: row, parent: parent }
}

const handleCurrentInputSubclassChange = (val: CodegenApi.InterfaceSubclassVO | undefined) => {
  inputSubclassCurrentRow.value = val
}

const handleCurrentOutputSubclassChange = (val: CodegenApi.InterfaceSubclassVO | undefined) => {
  outputSubclassCurrentRow.value = val
}

const handleAddSubclass = async () => {
  if (tabActiveName.value === 'inputParam' || tabActiveName.value === 'outputParam') {
    message.alertError('请切换到入参子类或出参子类')
    return
  }
  const newSubclass = {
    id: crypto.randomUUID(),
    name: '',
    comment: '',
    inheritClass: '',
    inheritType: 0,
    operateType: 'new',
    parentId: formData.value.id,
    subclassParams: []
  }
  if (tabActiveName.value === 'inputParamSubclass') {
    formData.value.inputSubclasses.push(newSubclass)
  } else {
    formData.value.outputSubclasses.push(newSubclass)
  }
}

const handleDeleteSubclass = async () => {
  if (tabActiveName.value === 'inputParamSubclass') {
    if (inputSubclassCurrentRow.value === undefined) {
      message.alertError('请选择要删除的子类')
      return
    }
    if (formType.value === 'create') {
      const index = formData.value.inputSubclasses.indexOf(inputSubclassCurrentRow.value)
      formData.value.inputSubclasses.splice(index, 1)
    } else {
      inputSubclassTable.value?.toggleRowExpansion(inputSubclassCurrentRow.value, false)
      inputSubclassCurrentRow.value.operateType = 'delete'
      for (let i = 0; i < inputSubclassCurrentRow.value.subclassParams.length; i++) {
        inputSubclassCurrentRow.value.subclassParams[i].operateType = 'delete'
        for (
          let y = 0;
          y < inputSubclassCurrentRow.value.subclassParams[i].validations.length;
          y++
        ) {
          inputSubclassCurrentRow.value.subclassParams[i].validations[y].operateType = 'delete'
        }
      }
    }
  }
  if (tabActiveName.value === 'outputParamSubclass') {
    if (outputSubclassCurrentRow.value === undefined) {
      message.alertError('请选择要删除的子类')
      return
    }
    if (formType.value === 'create') {
      const index = formData.value.outputSubclasses.indexOf(outputSubclassCurrentRow.value)
      formData.value.outputSubclasses.splice(index, 1)
    } else {
      outputSubclassTable.value?.toggleRowExpansion(outputSubclassCurrentRow.value, false)
      outputSubclassCurrentRow.value.operateType = 'delete'
      for (let i = 0; i < outputSubclassCurrentRow.value.subclassParams.length; i++) {
        outputSubclassCurrentRow.value.subclassParams[i].operateType = 'delete'
        for (
          let y = 0;
          y < outputSubclassCurrentRow.value.subclassParams[i].validations.length;
          y++
        ) {
          outputSubclassCurrentRow.value.subclassParams[i].validations[y].operateType = 'delete'
        }
      }
    }
  }
}

const interfaceNameBlur = () => {
  if (formData.value.operateType != 'new') return
  if (formData.value.name.toLocaleLowerCase().indexOf('page') >= 0) {
    formData.value.inputExtendClass = 'PageParam'
    formData.value.inputType = 'VOClass'
    formData.value.outputType = 'VOClassPage'
    formData.value.comment = '分页查询'
    formData.value.method = 'get'
  } else if (formData.value.name.toLocaleLowerCase().indexOf('list') >= 0) {
    formData.value.inputType = 'VOClass'
    formData.value.outputType = 'VOClassList'
    formData.value.method = 'get'
    formData.value.comment = '查询'
  } else if (formData.value.name.toLocaleLowerCase().indexOf('create') >= 0) {
    formData.value.inputType = 'VOClass'
    formData.value.outputType = 'param'
    formData.value.method = 'post'
    formData.value.comment = '新增'
    formData.value.isTransaction = true
  } else if (formData.value.name.toLocaleLowerCase().indexOf('update') >= 0) {
    formData.value.inputType = 'VOClass'
    formData.value.outputType = 'param'
    formData.value.method = 'put'
    formData.value.comment = '更新'
    formData.value.isTransaction = true
    let isExist = false
    for (let i = 0; formData.value.outputParams.length; i++) {
      if (formData.value.outputParams[i].name == 'isSuccess') {
        isExist = true
        break
      }
    }
    if (!isExist) {
      const newParam = {
        id: crypto.randomUUID(),
        name: 'isSuccess',
        comment: '是否成功',
        isList: 0,
        variableType: 'Boolean',
        relatedColumn: '',
        relatedType: 0,
        relatedId: '',
        example: '',
        required: 0,
        operateType: 'new',
        parentId: formData.value.id,
        parentType: 0,
        inoutType: 1,
        validations: []
      }
      formData.value.outputParams.push(newParam)
    }
  } else if (formData.value.name.toLocaleLowerCase().indexOf('delete') >= 0) {
    formData.value.inputType = 'param'
    formData.value.outputType = 'param'
    formData.value.method = 'delete'
    formData.value.comment = '删除'
    formData.value.isTransaction = true
    let isExist = false
    for (let i = 0; formData.value.outputParams.length; i++) {
      if (formData.value.outputParams[i].name == 'isSuccess') {
        isExist = true
        break
      }
    }
    if (!isExist) {
      const newParam = {
        id: crypto.randomUUID(),
        name: 'isSuccess',
        comment: '是否成功',
        isList: 0,
        variableType: 'Boolean',
        relatedColumn: '',
        relatedType: 0,
        relatedId: '',
        example: '',
        required: 0,
        operateType: 'new',
        parentId: formData.value.id,
        parentType: 0,
        inoutType: 1,
        validations: []
      }
      formData.value.outputParams.push(newParam)
    }
  } else if (formData.value.name.indexOf('singleGet') >= 0) {
    formData.value.inputType = 'param'
    formData.value.outputType = 'VOClass'
    formData.value.method = 'get'
    formData.value.comment = '获取单个'
  } else if (formData.value.name.indexOf('import') >= 0) {
    handleIsImport(true)
  }
}

const handleAddParam = async () => {
  const newParam = {
    id: crypto.randomUUID(),
    name: '',
    comment: '',
    isList: 0,
    variableType: '',
    relatedColumn: '',
    relatedType: 0,
    relatedId: '',
    example: '',
    required: 0,
    operateType: 'new',
    parentId: '',
    parentType: 0,
    inoutType: 0,
    validations: []
  }

  if (tabActiveName.value === 'inputParam') {
    newParam.parentId = formData.value.id
    newParam.parentType = 0
    newParam.inoutType = 0
    formData.value.inputParams.push(newParam)
  } else if (tabActiveName.value === 'outputParam') {
    newParam.parentId = formData.value.id
    newParam.parentType = 0
    newParam.inoutType = 1
    formData.value.outputParams.push(newParam)
  } else if (tabActiveName.value === 'inputParamSubclass') {
    if (inputSubclassCurrentRow.value === undefined) {
      message.alertError('请选择子类')
      return
    }
    inputSubclassTable.value?.toggleRowExpansion(inputSubclassCurrentRow.value, true)
    newParam.parentId = inputSubclassCurrentRow.value.id
    newParam.parentType = 1
    newParam.inoutType = 0
    inputSubclassCurrentRow.value.subclassParams.push(newParam)
  } else {
    if (outputSubclassCurrentRow.value === undefined) {
      message.alertError('请选择子类')
      return
    }
    outputSubclassTable.value?.toggleRowExpansion(outputSubclassCurrentRow.value, true)
    newParam.parentId = outputSubclassCurrentRow.value.id
    newParam.parentType = 1
    newParam.inoutType = 1
    outputSubclassCurrentRow.value.subclassParams.push(newParam)
  }
}

const handleDeleteParam = async () => {
  if (paramCurrentRow.value[tabActiveName.value] === undefined) {
    message.alertError('请选择要删除的参数')
    return
  }
  if (paramCurrentRow.value[tabActiveName.value]['row'] === undefined) {
    message.alertError('请选择要删除的参数')
    return
  }
  if (formType.value === 'create') {
    const index = paramCurrentRow.value[tabActiveName.value]['parent'].indexOf(
      paramCurrentRow.value[tabActiveName.value]['row']
    )
    paramCurrentRow.value[tabActiveName.value]['parent'].splice(index, 1)
  } else {
    paramTable.value[tabActiveName.value]?.toggleRowExpansion(
      paramCurrentRow.value[tabActiveName.value]['row'],
      false
    )
    paramCurrentRow.value[tabActiveName.value]['row'].operateType = 'delete'
    for (let i = 0; i < paramCurrentRow.value[tabActiveName.value]['row'].validations.length; i++) {
      paramCurrentRow.value[tabActiveName.value]['row'].validations[i].operateType = 'delete'
    }
  }
  paramCurrentRow.value[tabActiveName.value] = undefined
}

const handleAddValidation = async () => {
  const newValidation = {
    id: crypto.randomUUID(),
    parentId: paramCurrentRow.value[tabActiveName.value]['row'].id,
    validation: '',
    validationCondition: '',
    message: '',
    operateType: 'new'
  }
  if (paramCurrentRow.value[tabActiveName.value] === undefined) {
    message.alertError('请先选择参数')
    return
  }

  if (paramCurrentRow.value[tabActiveName.value]['row'] === undefined) {
    message.alertError('请先选择参数')
    return
  }
  paramTable.value[tabActiveName.value]?.toggleRowExpansion(
    paramCurrentRow.value[tabActiveName.value]['row'],
    true
  )
  if (paramCurrentRow.value[tabActiveName.value]['row'].validations == undefined)
    paramCurrentRow.value[tabActiveName.value]['row'].validations = [newValidation]
  else paramCurrentRow.value[tabActiveName.value]['row'].validations.push(newValidation)
}

/** 删除校验列 */
const handleDeleteValidation = async () => {
  if (validationCurrentRow.value[tabActiveName.value] === undefined) {
    message.alertError('请选择要删除的校验列')
    return
  }
  if (validationCurrentRow.value[tabActiveName.value]['row'] === undefined) {
    message.alertError('请选择要删除的校验列')
    return
  }
  if (formType.value === 'create') {
    const index = validationCurrentRow.value[tabActiveName.value]['parent'].indexOf(
      validationCurrentRow.value[tabActiveName.value]['row']
    )
    if (index > -1) validationCurrentRow.value[tabActiveName.value]['parent'].splice(index, 1)
  } else {
    validationCurrentRow.value[tabActiveName.value]['row'].operateType = 'delete'
  }
  validationCurrentRow.value[tabActiveName.value] = undefined
}

/** 自动补全校验 */
const handleCompletionValidation = async () => {
  if (paramCurrentRow.value[tabActiveName.value] === undefined) {
    message.alertError('请先选择参数')
    return
  }

  if (paramCurrentRow.value[tabActiveName.value]['row'] === undefined) {
    message.alertError('请先选择参数')
    return
  }
  if (paramCurrentRow.value[tabActiveName.value]['row'].variableType != 'BigDecimal') return

  const newValidations = [
    {
      id: crypto.randomUUID(),
      parentId: paramCurrentRow.value[tabActiveName.value]['row'].id,
      validation: 'NotNull',
      validationCondition: '',
      message: paramCurrentRow.value[tabActiveName.value]['row'].comment + '不能为空',
      operateType: 'new'
    },
    {
      id: crypto.randomUUID(),
      parentId: paramCurrentRow.value[tabActiveName.value]['row'].id,
      validation: 'Positive',
      validationCondition: '',
      message: paramCurrentRow.value[tabActiveName.value]['row'].comment + '必须大于0',
      operateType: 'new'
    },
    {
      id: crypto.randomUUID(),
      parentId: paramCurrentRow.value[tabActiveName.value]['row'].id,
      validation: 'Digits',
      validationCondition: 'integer = 13, fraction = 4',
      message: paramCurrentRow.value[tabActiveName.value]['row'].comment + '格式无效',
      operateType: 'new'
    }
  ]

  paramTable.value[tabActiveName.value]?.toggleRowExpansion(
    paramCurrentRow.value[tabActiveName.value]['row'],
    true
  )
  if (paramCurrentRow.value[tabActiveName.value]['row'].validations == undefined)
    paramCurrentRow.value[tabActiveName.value]['row'].validations = newValidations
  else {
    const existsValidation = paramCurrentRow.value[tabActiveName.value]['row'].validations.map(
      (item) => item.validation
    )
    if (existsValidation.indexOf('NotNull') < 0) {
      paramCurrentRow.value[tabActiveName.value]['row'].validations.push(newValidations[0])
    }
    if (existsValidation.indexOf('Positive') < 0) {
      paramCurrentRow.value[tabActiveName.value]['row'].validations.push(newValidations[1])
    }
    if (existsValidation.indexOf('Digits') < 0) {
      paramCurrentRow.value[tabActiveName.value]['row'].validations.push(newValidations[2])
    }
  }
}

const handleAddExtendClass = () => {
  let variableType = 1 << 2

  if (tabActiveName.value === 'inputParam') {
    relateType = 3
  } else {
    relateType = 4
  }
  let params = {
    Subclasses: new Array<CodegenApi.InterfaceSubclassVO>(),
    variableType: variableType,
    isBatchAdd: 0
  }
  relatedParamRef.value.open(params)
}
/** 批量添加关联字段 */
const handleBatchAddRelatedColumn = () => {
  if (tabActiveName.value === 'inputParamSubclass') {
    if (inputSubclassCurrentRow.value === undefined) {
      message.alertError('请选择子类')
      return
    }
  }
  if (tabActiveName.value === 'outputParamSubclass') {
    if (outputSubclassCurrentRow.value === undefined) {
      message.alertError('请选择子类')
      return
    }
  }
  let variableType = 1 << 1
  let params = {
    Subclasses: new Array<CodegenApi.InterfaceSubclassVO>(),
    variableType: variableType,
    isBatchAdd: 1
  }
  relatedParamRef.value.open(params)
}

/** 添加关联字段 继承类 */
const handleAddRelatedColumn = (scope) => {
  relatedRef.value = scope.row
  let Subclasses: Array<CodegenApi.InterfaceSubclassVO> =
    new Array<CodegenApi.InterfaceSubclassVO>()
  //关联类型标记位 1 table字段 2 VO类 3 子类
  let variableType = 0
  if (tabActiveName.value === 'inputParam') {
    Subclasses = formData.value.inputSubclasses
    variableType = (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4)
    relateType = 1
  } else if (tabActiveName.value === 'inputParamSubclass') {
    formData.value.inputSubclasses.forEach((item: CodegenApi.InterfaceSubclassVO) => {
      if (item.name != '' && item.name != relatedRef.value.name) Subclasses.push(item)
    })
    if (scope.row.hasOwnProperty('variableType')) {
      variableType = (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4)
      relateType = 1
    } else {
      variableType = (1 << 2) | (1 << 3)
      relateType = 2
    }
  } else if (tabActiveName.value === 'outputParam') {
    Subclasses = formData.value.outputSubclasses
    variableType = (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4)
    relateType = 1
  } else {
    formData.value.outputSubclasses.forEach((item: CodegenApi.InterfaceSubclassVO) => {
      if (item.name != '' && item.name != relatedRef.value.name) Subclasses.push(item)
      if (scope.row.hasOwnProperty('variableType')) {
        variableType = (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4)
        relateType = 1
      } else {
        variableType = (1 << 2) | (1 << 3)
        relateType = 2
      }
    })
  }
  let params = {
    Subclasses: Subclasses,
    variableType: variableType,
    isBatchAdd: 0
  }
  relatedParamRef.value.open(params)
}

const handleSetEmptyColumn = (scope) => {
  scope.row.inheritClass = ''
  scope.row.inheritType = 0
}

const handleBatchRelatedParam = (dbSelectdColumnList) => {
  if (tabActiveName.value === 'inputParamSubclass') {
    inputSubclassTable.value?.toggleRowExpansion(inputSubclassCurrentRow.value, true)
  }
  if (tabActiveName.value === 'outputParamSubclass') {
    outputSubclassTable.value?.toggleRowExpansion(outputSubclassCurrentRow.value, true)
  }
  dbSelectdColumnList.forEach((element) => {
    const newParam = {
      id: crypto.randomUUID(),
      name: camelCase(element.columnName),
      comment: element.columnComment,
      isList: 0,
      variableType: element.javaType,
      relatedColumn: element.tableName + '.' + element.columnName,
      relatedType: 1,
      relatedId: element.id,
      example: element.example,
      required: 0,
      operateType: 'new',
      parentId: '',
      parentType: 0,
      inoutType: 0,
      validations: []
    }
    if (tabActiveName.value === 'inputParam') {
      newParam.parentId = formData.value.id
      newParam.parentType = 0
      newParam.inoutType = 0
      formData.value.inputParams.push(newParam)
    } else if (tabActiveName.value === 'outputParam') {
      newParam.parentId = formData.value.id
      newParam.parentType = 0
      newParam.inoutType = 1
      formData.value.outputParams.push(newParam)
    } else if (tabActiveName.value === 'inputParamSubclass') {
      newParam.parentId = inputSubclassCurrentRow.value.id
      newParam.parentType = 1
      newParam.inoutType = 0
      inputSubclassCurrentRow.value.subclassParams.push(newParam)
    } else {
      newParam.parentId = outputSubclassCurrentRow.value.id
      newParam.parentType = 1
      newParam.inoutType = 1
      outputSubclassCurrentRow.value.subclassParams.push(newParam)
    }
  })
}

const handleRelatedParam = (row) => {
  if (relateType == 1) {
    if (row.relatedType === '1') {
      relatedRef.value.name = camelCase(row.columnName)
      relatedRef.value.variableType = row.javaType
      relatedRef.value.comment = row.columnComment
      relatedRef.value.example = row.example
    } else if (row.relatedType === '2') {
      relatedRef.value.name = row.name
      relatedRef.value.variableType = 'VOClass'
      relatedRef.value.comment = row.comment
    } else if (row.relatedType === '3') {
      relatedRef.value.name = row.name
      relatedRef.value.comment = row.comment
      relatedRef.value.variableType = 'Subclass'
    } else {
      relatedRef.value.name = row.name
      relatedRef.value.comment = row.comment
      relatedRef.value.variableType = row.javaType
    }
    relatedRef.value.relatedColumn = row.relatedColumn
    relatedRef.value.relatedId = row.id
    relatedRef.value.relatedType = row.relatedType
  } else if (relateType == 2) {
    relatedRef.value.inheritClass = row.name
    relatedRef.value.comment = row.comment
    relatedRef.value.inheritType = row.relatedType
  } else if (relateType == 3) {
    formData.value.inputExtendClass = row.name
  } else if (relateType == 4) {
    formData.value.outputExtendClass = row.name
  }
}

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const handleSaveInterface = async () => {
  // 校验表单
  if (formData.value.inputType == '') tabActiveName.value = 'inputParam'
  if (formData.value.outputType == '') tabActiveName.value = 'outputParam'
  if (!formRef) return
  const formValid = await formRef.value.validate()
  if (!formValid) return

  if (!inputParamRef) return
  const inputValid = await inputParamRef.value.validate()
  if (!inputValid) return

  if (!outputParamRef) return
  const outputValid = await outputParamRef.value.validate()
  if (!outputValid) return
  if (formData.value.method != 'download' && formData.value.outputType == 'void') {
    message.alertError('非download的调用方法出参类型不能是void')
    return
  }
  if (formData.value.inputType == 'param' && formData.value.inputParams.length == 0) {
    message.alertError('入参类型是参数 必须添加入参参数')
    return
  }
  if (formData.value.outputType == 'param' && formData.value.outputParams.length == 0) {
    message.alertError('出参类型不是参数 必须添加出参参数')
    return
  }
  if (
    formData.value.name.toLocaleLowerCase().indexOf('query') >= 0 &&
    formData.value.outputExtendClass == ''
  ) {
    await message.confirm('查询接口没有添加出参继承类，确定保存吗？')
  }
  if (
    formData.value.name.toLocaleLowerCase().indexOf('create') >= 0 &&
    formData.value.inputExtendClass == ''
  ) {
    await message.confirm('新增接口没有添加入参继承类，确定保存吗？')
  }
  if (
    formData.value.name.toLocaleLowerCase().indexOf('update') >= 0 &&
    formData.value.inputExtendClass == ''
  ) {
    await message.confirm('更新接口没有添加入参继承类，确定保存吗？')
  }

  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as CodegenApi.InterfaceVO
    if (formType.value === 'create') {
      await CodegenApi.createInterface(data)
      message.success(t('common.createSuccess'))
    } else {
      await CodegenApi.updateInterface(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

const handleTableRef = (el, tabName: string) => {
  paramTable.value[tabName] = el
}

/** 重置表单 */
const resetForm = () => {
  cancelAnimationFrame
  let resetFromData = JSON.parse(JSON.stringify(initFormData))
  formData.value = resetFromData
  formRef.value?.resetFields()
  inputSubclassCurrentRow.value = undefined
  outputSubclassCurrentRow.value = undefined
  tabActiveName.value = 'inputParam'
  relatedRef.value = undefined
}

/** 获得模块树 */
const getTree = async () => {
  moduleTree.value = []
  const data = await CodegenApi.getSimpleList()
  moduleTree.value = handleTree(data)
}

const validationChange = (row) => {
  let validations = ['NotNull', 'Mobile', 'InEnum', 'URL']
  if (row.variableType == 'String') {
    validations = validations.concat(['NotBlank', 'Pattern', 'Length', 'Email'])
  }
  if (['String', 'Map<String, Object>'].includes(row.variableType) || row.isList == 'true') {
    validations.push('NotEmpty', 'Size')
  }
  if (['Long', 'Integer', 'Double'].includes(row.variableType)) {
    validations = validations.concat(['Min', 'Max'])
  }
  if (row.variableType == 'BigDecimal') {
    validations = validations.concat([
      'DecimalMin',
      'DecimalMax',
      'Positive',
      'PositiveOrZero',
      'Digits'
    ])
  }
  if (['Long', 'Integer', 'Double', 'BigDecimal'].includes(row.variableType)) {
    validations = validations.concat(['Range'])
  }
  return validations
}

const handleIsImport = (value) => {
  if (value) {
    formData.value.inputType = 'VOClassList'
    formData.value.outputType = 'VOClassList'
    formData.value.outputExtendClass = 'importRespVO'
    formData.value.method = 'upload'
  }
}
</script>

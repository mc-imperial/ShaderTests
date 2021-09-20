; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 288
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %54 %90
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %19 "buf0"
               OpMemberName %19 0 "_GLF_uniform_int_values"
               OpName %21 ""
               OpName %54 "gl_FragCoord"
               OpName %90 "_GLF_color"
               OpDecorate %18 ArrayStride 16
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 0
               OpDecorate %54 BuiltIn FragCoord
               OpDecorate %90 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 6
         %18 = OpTypeArray %6 %17
         %19 = OpTypeStruct %18
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpConstant %6 0
         %23 = OpTypePointer Uniform %6
         %32 = OpConstant %6 5
         %35 = OpTypeBool
         %38 = OpConstant %6 1
         %51 = OpTypeFloat 32
         %52 = OpTypeVector %51 4
         %53 = OpTypePointer Input %52
         %54 = OpVariable %53 Input
         %55 = OpConstant %16 0
         %56 = OpTypePointer Input %51
         %59 = OpConstant %51 0
         %63 = OpConstant %6 -1
         %65 = OpConstant %6 2
         %68 = OpConstant %16 1
         %89 = OpTypePointer Output %52
         %90 = OpVariable %89 Output
        %104 = OpConstant %6 3
        %108 = OpConstant %6 4
        %141 = OpConstantFalse %35
        %144 = OpConstantTrue %35
        %279 = OpUndef %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpSelectionMerge %193 None
               OpSwitch %55 %158
        %158 = OpLabel
        %159 = OpAccessChain %56 %54 %68
        %160 = OpLoad %51 %159
        %161 = OpFOrdGreaterThan %35 %160 %59
               OpSelectionMerge %190 None
               OpBranchConditional %161 %162 %190
        %162 = OpLabel
               OpSelectionMerge %170 None
               OpBranchConditional %161 %166 %170
        %166 = OpLabel
        %167 = OpAccessChain %23 %21 %22 %22
        %168 = OpLoad %6 %167
               OpSelectionMerge %231 None
               OpSwitch %55 %200
        %200 = OpLabel
               OpBranch %203
        %203 = OpLabel
        %281 = OpPhi %6 %168 %200 %219 %220
        %280 = OpPhi %6 %168 %200 %222 %220
        %206 = OpAccessChain %23 %21 %22 %32
        %207 = OpLoad %6 %206
        %208 = OpSLessThan %35 %280 %207
               OpLoopMerge %223 %220 None
               OpBranchConditional %208 %209 %223
        %209 = OpLabel
        %211 = OpAccessChain %23 %21 %22 %38
        %212 = OpLoad %6 %211
        %213 = OpIEqual %35 %281 %212
               OpSelectionMerge %217 None
               OpBranchConditional %213 %214 %217
        %214 = OpLabel
               OpBranch %223
        %217 = OpLabel
        %219 = OpIAdd %6 %281 %38
               OpBranch %220
        %220 = OpLabel
        %222 = OpIAdd %6 %280 %38
               OpBranch %203
        %223 = OpLabel
        %285 = OpPhi %6 %279 %203 %212 %214
        %282 = OpPhi %35 %141 %203 %144 %214
               OpSelectionMerge %225 None
               OpBranchConditional %282 %231 %225
        %225 = OpLabel
        %226 = OpAccessChain %56 %54 %55
        %227 = OpLoad %51 %226
        %228 = OpFOrdGreaterThan %35 %227 %59
               OpSelectionMerge %230 None
               OpBranchConditional %228 %229 %230
        %229 = OpLabel
               OpBranch %231
        %230 = OpLabel
               OpBranch %231
        %231 = OpLabel
        %284 = OpPhi %6 %285 %223 %63 %229 %65 %230
               OpBranch %193
        %170 = OpLabel
        %171 = OpAccessChain %56 %54 %55
        %172 = OpLoad %51 %171
        %173 = OpFOrdGreaterThan %35 %172 %59
               OpSelectionMerge %179 None
               OpBranchConditional %173 %174 %179
        %174 = OpLabel
        %175 = OpAccessChain %23 %21 %22 %22
        %176 = OpLoad %6 %175
        %177 = OpConvertSToF %51 %176
        %178 = OpCompositeConstruct %52 %177 %177 %177 %177
               OpStore %90 %178
               OpBranch %179
        %179 = OpLabel
        %180 = OpAccessChain %23 %21 %22 %65
        %181 = OpLoad %6 %180
               OpSelectionMerge %269 None
               OpSwitch %55 %238
        %238 = OpLabel
        %239 = OpAccessChain %23 %21 %22 %22
        %240 = OpLoad %6 %239
               OpBranch %241
        %241 = OpLabel
        %272 = OpPhi %6 %181 %238 %257 %258
        %271 = OpPhi %6 %240 %238 %260 %258
        %244 = OpAccessChain %23 %21 %22 %32
        %245 = OpLoad %6 %244
        %246 = OpSLessThan %35 %271 %245
               OpLoopMerge %261 %258 None
               OpBranchConditional %246 %247 %261
        %247 = OpLabel
        %249 = OpAccessChain %23 %21 %22 %38
        %250 = OpLoad %6 %249
        %251 = OpIEqual %35 %272 %250
               OpSelectionMerge %255 None
               OpBranchConditional %251 %252 %255
        %252 = OpLabel
               OpBranch %261
        %255 = OpLabel
        %257 = OpIAdd %6 %272 %38
               OpBranch %258
        %258 = OpLabel
        %260 = OpIAdd %6 %271 %38
               OpBranch %241
        %261 = OpLabel
        %276 = OpPhi %6 %279 %241 %250 %252
        %273 = OpPhi %35 %141 %241 %144 %252
               OpSelectionMerge %263 None
               OpBranchConditional %273 %269 %263
        %263 = OpLabel
               OpSelectionMerge %268 None
               OpBranchConditional %173 %267 %268
        %267 = OpLabel
               OpBranch %269
        %268 = OpLabel
               OpBranch %269
        %269 = OpLabel
        %275 = OpPhi %6 %276 %261 %63 %267 %65 %268
        %185 = OpSGreaterThan %35 %275 %240
               OpSelectionMerge %189 None
               OpBranchConditional %185 %186 %189
        %186 = OpLabel
        %187 = OpAccessChain %23 %21 %22 %104
        %188 = OpLoad %6 %187
               OpBranch %193
        %189 = OpLabel
               OpBranch %190
        %190 = OpLabel
        %191 = OpAccessChain %23 %21 %22 %108
        %192 = OpLoad %6 %191
               OpBranch %193
        %193 = OpLabel
        %287 = OpPhi %6 %284 %231 %188 %186 %192 %190
        %114 = OpAccessChain %23 %21 %22 %38
        %115 = OpLoad %6 %114
        %116 = OpIEqual %35 %287 %115
               OpSelectionMerge %118 None
               OpBranchConditional %116 %117 %132
        %117 = OpLabel
        %121 = OpConvertSToF %51 %115
        %122 = OpAccessChain %23 %21 %22 %22
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %51 %123
        %131 = OpCompositeConstruct %52 %121 %124 %124 %121
               OpStore %90 %131
               OpBranch %118
        %132 = OpLabel
        %133 = OpAccessChain %23 %21 %22 %22
        %134 = OpLoad %6 %133
        %135 = OpConvertSToF %51 %134
        %136 = OpCompositeConstruct %52 %135 %135 %135 %135
               OpStore %90 %136
               OpBranch %118
        %118 = OpLabel
               OpReturn
               OpFunctionEnd

; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 263
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %74 %151
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "S"
               OpMemberName %7 0 "data"
               OpName %20 "arr"
               OpName %46 "buf1"
               OpMemberName %46 0 "_GLF_uniform_int_values"
               OpName %48 ""
               OpName %74 "gl_FragCoord"
               OpName %81 "buf0"
               OpMemberName %81 0 "_GLF_uniform_float_values"
               OpName %83 ""
               OpName %92 "buf_push"
               OpMemberName %92 0 "injectionSwitch"
               OpName %94 ""
               OpName %151 "_GLF_color"
               OpDecorate %45 ArrayStride 16
               OpMemberDecorate %46 0 Offset 0
               OpDecorate %46 Block
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 1
               OpDecorate %74 BuiltIn FragCoord
               OpDecorate %80 ArrayStride 16
               OpMemberDecorate %81 0 Offset 0
               OpDecorate %81 Block
               OpDecorate %83 DescriptorSet 0
               OpDecorate %83 Binding 0
               OpMemberDecorate %92 0 Offset 0
               OpDecorate %92 Block
               OpDecorate %151 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeStruct %6
          %8 = OpTypePointer Function %7
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 10
         %18 = OpTypeArray %7 %17
         %21 = OpConstant %6 1
         %22 = OpConstantComposite %7 %21
         %23 = OpConstant %6 2
         %24 = OpConstantComposite %7 %23
         %25 = OpConstant %6 3
         %26 = OpConstantComposite %7 %25
         %27 = OpConstant %6 4
         %28 = OpConstantComposite %7 %27
         %29 = OpConstant %6 5
         %30 = OpConstantComposite %7 %29
         %31 = OpConstant %6 6
         %32 = OpConstantComposite %7 %31
         %33 = OpConstant %6 7
         %34 = OpConstantComposite %7 %33
         %35 = OpConstant %6 8
         %36 = OpConstantComposite %7 %35
         %37 = OpConstant %6 9
         %38 = OpConstantComposite %7 %37
         %39 = OpConstant %6 10
         %40 = OpConstantComposite %7 %39
         %41 = OpConstantComposite %18 %22 %24 %26 %28 %30 %32 %34 %36 %38 %40
         %44 = OpConstant %16 4
         %45 = OpTypeArray %6 %44
         %46 = OpTypeStruct %45
         %47 = OpTypePointer Uniform %46
         %48 = OpVariable %47 Uniform
         %49 = OpConstant %6 0
         %50 = OpTypePointer Uniform %6
         %64 = OpTypeBool
         %71 = OpTypeFloat 32
         %72 = OpTypeVector %71 4
         %73 = OpTypePointer Input %72
         %74 = OpVariable %73 Input
         %75 = OpConstant %16 0
         %76 = OpTypePointer Input %71
         %79 = OpConstant %16 1
         %80 = OpTypeArray %71 %79
         %81 = OpTypeStruct %80
         %82 = OpTypePointer Uniform %81
         %83 = OpVariable %82 Uniform
         %84 = OpTypePointer Uniform %71
         %91 = OpTypeVector %71 2
         %92 = OpTypeStruct %91
         %93 = OpTypePointer PushConstant %92
         %94 = OpVariable %93 PushConstant
         %95 = OpTypePointer PushConstant %71
        %111 = OpConstant %6 -1
        %150 = OpTypePointer Output %72
        %151 = OpVariable %150 Output
        %174 = OpConstantFalse %64
        %177 = OpConstantTrue %64
        %249 = OpTypePointer Function %18
        %260 = OpUndef %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %20 = OpVariable %249 Function
               OpStore %20 %41
        %136 = OpAccessChain %50 %48 %49 %25
        %137 = OpLoad %6 %136
        %139 = OpAccessChain %8 %20 %137
        %140 = OpLoad %7 %139
               OpStore %139 %140
               OpSelectionMerge %247 None
               OpSwitch %75 %188
        %188 = OpLabel
        %189 = OpAccessChain %50 %48 %49 %21
        %190 = OpLoad %6 %189
               OpBranch %193
        %193 = OpLabel
        %253 = OpPhi %6 %190 %188 %262 %240
        %252 = OpPhi %6 %190 %188 %242 %240
        %196 = OpAccessChain %50 %48 %49 %49
        %197 = OpLoad %6 %196
        %198 = OpSLessThan %64 %252 %197
               OpLoopMerge %243 %240 None
               OpBranchConditional %198 %199 %243
        %199 = OpLabel
        %201 = OpAccessChain %8 %20 %253
        %202 = OpLoad %7 %201
        %251 = OpCompositeExtract %6 %202 0
        %203 = OpAccessChain %76 %74 %75
        %204 = OpLoad %71 %203
        %205 = OpAccessChain %84 %83 %49 %49
        %206 = OpLoad %71 %205
        %207 = OpFOrdLessThan %64 %204 %206
               OpSelectionMerge %209 None
               OpBranchConditional %207 %208 %209
        %208 = OpLabel
               OpBranch %240
        %209 = OpLabel
        %210 = OpAccessChain %95 %94 %49 %75
        %211 = OpLoad %71 %210
        %212 = OpAccessChain %95 %94 %49 %79
        %213 = OpLoad %71 %212
        %214 = OpFOrdGreaterThan %64 %211 %213
               OpSelectionMerge %216 None
               OpBranchConditional %214 %215 %216
        %215 = OpLabel
               OpBranch %240
        %216 = OpLabel
        %219 = OpAccessChain %50 %48 %49 %23
        %220 = OpLoad %6 %219
        %221 = OpIEqual %64 %251 %220
               OpSelectionMerge %223 None
               OpBranchConditional %221 %222 %223
        %222 = OpLabel
               OpBranch %243
        %223 = OpLabel
               OpSelectionMerge %230 None
               OpBranchConditional %214 %229 %230
        %229 = OpLabel
               OpBranch %243
        %230 = OpLabel
               OpSelectionMerge %237 None
               OpBranchConditional %207 %236 %237
        %236 = OpLabel
               OpBranch %243
        %237 = OpLabel
               OpBranch %240
        %240 = OpLabel
        %262 = OpPhi %6 %253 %208 %253 %215 %251 %237
        %242 = OpIAdd %6 %252 %21
               OpBranch %193
        %243 = OpLabel
        %258 = OpPhi %6 %260 %193 %111 %222 %260 %229 %111 %236
        %254 = OpPhi %64 %174 %193 %177 %222 %174 %229 %177 %236
               OpSelectionMerge %245 None
               OpBranchConditional %254 %247 %245
        %245 = OpLabel
               OpBranch %247
        %247 = OpLabel
        %257 = OpPhi %6 %258 %243 %253 %245
        %147 = OpIEqual %64 %257 %197
               OpSelectionMerge %149 None
               OpBranchConditional %147 %148 %165
        %148 = OpLabel
        %154 = OpConvertSToF %71 %137
        %157 = OpConvertSToF %71 %190
        %164 = OpCompositeConstruct %72 %154 %157 %157 %154
               OpStore %151 %164
               OpBranch %149
        %165 = OpLabel
        %168 = OpConvertSToF %71 %190
        %169 = OpCompositeConstruct %72 %168 %168 %168 %168
               OpStore %151 %169
               OpBranch %149
        %149 = OpLabel
               OpReturn
               OpFunctionEnd

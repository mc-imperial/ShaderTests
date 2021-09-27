; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 242
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %44 %51
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %22 "buf1"
               OpMemberName %22 0 "_GLF_uniform_int_values"
               OpName %24 ""
               OpName %44 "_GLF_color"
               OpName %51 "gl_FragCoord"
               OpName %58 "buf0"
               OpMemberName %58 0 "_GLF_uniform_float_values"
               OpName %60 ""
               OpDecorate %21 ArrayStride 16
               OpMemberDecorate %22 0 Offset 0
               OpDecorate %22 Block
               OpDecorate %24 DescriptorSet 0
               OpDecorate %24 Binding 1
               OpDecorate %44 Location 0
               OpDecorate %51 BuiltIn FragCoord
               OpDecorate %57 ArrayStride 16
               OpMemberDecorate %58 0 Offset 0
               OpDecorate %58 Block
               OpDecorate %60 DescriptorSet 0
               OpDecorate %60 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %16 = OpTypeInt 32 1
         %19 = OpTypeInt 32 0
         %20 = OpConstant %19 2
         %21 = OpTypeArray %16 %20
         %22 = OpTypeStruct %21
         %23 = OpTypePointer Uniform %22
         %24 = OpVariable %23 Uniform
         %25 = OpConstant %16 0
         %26 = OpTypePointer Uniform %16
         %40 = OpTypeBool
         %43 = OpTypePointer Output %7
         %44 = OpVariable %43 Output
         %47 = OpConstant %16 1
         %50 = OpTypePointer Input %7
         %51 = OpVariable %50 Input
         %52 = OpConstant %19 0
         %53 = OpTypePointer Input %6
         %56 = OpConstant %19 3
         %57 = OpTypeArray %6 %56
         %58 = OpTypeStruct %57
         %59 = OpTypePointer Uniform %58
         %60 = OpVariable %59 Uniform
         %61 = OpTypePointer Uniform %6
         %94 = OpConstant %16 2
        %111 = OpConstant %16 3
        %113 = OpTypeArray %7 %56
        %114 = OpConstant %6 1
        %115 = OpConstantComposite %7 %114 %114 %114 %114
        %116 = OpConstantComposite %113 %115 %115 %115
        %119 = OpTypePointer Function %113
        %124 = OpConstant %19 5
        %125 = OpTypeArray %7 %124
        %126 = OpConstant %6 0
        %127 = OpConstantComposite %7 %114 %126 %126 %114
        %128 = OpConstantComposite %125 %115 %127 %115 %115 %115
        %131 = OpTypePointer Function %125
        %241 = OpUndef %7
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %150 = OpVariable %119 Function
        %151 = OpVariable %131 Function
        %154 = OpAccessChain %61 %60 %25 %94
        %155 = OpLoad %6 %154
        %156 = OpAccessChain %61 %60 %25 %47
        %157 = OpLoad %6 %156
        %162 = OpCompositeConstruct %7 %155 %157 %155 %155
               OpBranch %163
        %163 = OpLabel
        %240 = OpPhi %7 %241 %5 %239 %176
        %237 = OpPhi %7 %162 %5 %175 %176
        %236 = OpPhi %16 %25 %5 %178 %176
        %166 = OpSLessThan %40 %236 %111
               OpLoopMerge %179 %176 None
               OpBranchConditional %166 %167 %179
        %167 = OpLabel
               OpStore %150 %116
        %169 = OpAccessChain %8 %150 %236
        %170 = OpLoad %7 %169
               OpSelectionMerge %233 None
               OpSwitch %52 %185
        %185 = OpLabel
        %186 = OpAccessChain %26 %24 %25 %25
        %187 = OpLoad %16 %186
        %190 = OpShiftLeftLogical %16 %187 %187
               OpBranch %191
        %191 = OpLabel
        %239 = OpPhi %7 %240 %185 %198 %197
        %238 = OpPhi %16 %190 %185 %201 %197
        %196 = OpINotEqual %40 %238 %187
               OpLoopMerge %202 %197 None
               OpBranchConditional %196 %197 %202
        %197 = OpLabel
        %198 = OpLoad %7 %44
        %201 = OpISub %16 %238 %47
               OpBranch %191
        %202 = OpLabel
               OpStore %44 %239
        %204 = OpAccessChain %53 %51 %52
        %205 = OpLoad %6 %204
        %206 = OpAccessChain %61 %60 %25 %25
        %207 = OpLoad %6 %206
        %208 = OpFOrdLessThan %40 %205 %207
               OpSelectionMerge %210 None
               OpBranchConditional %208 %209 %210
        %209 = OpLabel
               OpBranch %233
        %210 = OpLabel
               OpSelectionMerge %217 None
               OpBranchConditional %208 %216 %217
        %216 = OpLabel
               OpKill
        %217 = OpLabel
        %219 = OpCompositeExtract %6 %170 0
        %222 = OpFOrdGreaterThan %40 %219 %207
               OpSelectionMerge %228 None
               OpBranchConditional %222 %223 %228
        %223 = OpLabel
        %226 = OpConvertSToF %6 %187
        %227 = OpCompositeConstruct %7 %226 %226 %226 %226
               OpStore %44 %227
               OpBranch %233
        %228 = OpLabel
        %229 = OpAccessChain %26 %24 %25 %47
        %230 = OpLoad %16 %229
        %231 = OpConvertSToF %6 %230
        %232 = OpCompositeConstruct %7 %231 %231 %231 %231
               OpStore %44 %232
               OpBranch %233
        %233 = OpLabel
               OpStore %151 %128
        %174 = OpAccessChain %8 %151 %187
        %175 = OpLoad %7 %174
               OpBranch %176
        %176 = OpLabel
        %178 = OpIAdd %16 %236 %47
               OpBranch %163
        %179 = OpLabel
               OpStore %44 %237
               OpReturn
               OpFunctionEnd

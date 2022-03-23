; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 307
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %282
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %40 "i"
               OpName %43 "buf1"
               OpMemberName %43 0 "_GLF_uniform_int_values"
               OpName %45 ""
               OpName %61 "j"
               OpName %71 "k"
               OpName %80 "l"
               OpName %130 "indexable"
               OpName %151 "indexable"
               OpName %172 "indexable"
               OpName %189 "indexable"
               OpName %204 "indexable"
               OpName %219 "indexable"
               OpName %235 "indexable"
               OpName %282 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 1
               OpDecorate %282 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 9
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 2
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpTypePointer Uniform %6
         %39 = OpTypePointer Function %17
         %41 = OpConstant %7 5
         %42 = OpTypeArray %17 %41
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %46 = OpConstant %17 3
         %47 = OpTypePointer Uniform %17
         %56 = OpConstant %17 1
         %59 = OpTypeBool
         %62 = OpConstant %17 2
         %69 = OpConstant %17 4
        %102 = OpTypePointer Function %6
        %117 = OpTypeVector %6 4
        %118 = OpTypeMatrix %117 2
        %119 = OpConstant %6 0
        %120 = OpConstantComposite %117 %119 %119 %119 %119
        %121 = OpConstantComposite %118 %120 %120
        %129 = OpTypePointer Function %118
        %139 = OpTypeVector %6 2
        %140 = OpTypeMatrix %139 3
        %141 = OpConstantComposite %139 %119 %119
        %142 = OpConstantComposite %140 %141 %141 %141
        %150 = OpTypePointer Function %140
        %160 = OpTypeVector %6 3
        %161 = OpTypeMatrix %160 3
        %162 = OpConstantComposite %160 %119 %119 %119
        %163 = OpConstantComposite %161 %162 %162 %162
        %171 = OpTypePointer Function %161
        %181 = OpTypeMatrix %117 3
        %182 = OpConstantComposite %181 %120 %120 %120
        %188 = OpTypePointer Function %181
        %198 = OpTypeMatrix %139 4
        %199 = OpConstantComposite %198 %141 %141 %141 %141
        %203 = OpTypePointer Function %198
        %213 = OpTypeMatrix %160 4
        %214 = OpConstantComposite %213 %162 %162 %162 %162
        %218 = OpTypePointer Function %213
        %227 = OpTypeMatrix %117 4
        %228 = OpConstantComposite %227 %120 %120 %120 %120
        %234 = OpTypePointer Function %227
        %281 = OpTypePointer Output %117
        %282 = OpVariable %281 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %40 = OpVariable %39 Function
         %61 = OpVariable %39 Function
         %71 = OpVariable %39 Function
         %80 = OpVariable %39 Function
        %130 = OpVariable %129 Function
        %151 = OpVariable %150 Function
        %172 = OpVariable %171 Function
        %189 = OpVariable %188 Function
        %204 = OpVariable %203 Function
        %219 = OpVariable %218 Function
        %235 = OpVariable %234 Function
         %20 = OpAccessChain %19 %16 %18 %18
         %21 = OpLoad %6 %20
         %38 = OpCompositeConstruct %9 %21 %21 %21 %21 %21 %21 %21 %21 %21
               OpStore %11 %38
         %48 = OpAccessChain %47 %45 %18 %46
         %49 = OpLoad %17 %48
               OpStore %40 %49
               OpBranch %50
         %50 = OpLabel
        %301 = OpPhi %17 %49 %5 %251 %53
               OpLoopMerge %52 %53 None
               OpBranch %54
         %54 = OpLabel
         %57 = OpAccessChain %47 %45 %18 %56
         %58 = OpLoad %17 %57
         %60 = OpSLessThan %59 %301 %58
               OpBranchConditional %60 %51 %52
         %51 = OpLabel
               OpStore %61 %62
               OpBranch %63
         %63 = OpLabel
        %302 = OpPhi %17 %62 %51 %249 %66
               OpLoopMerge %65 %66 None
               OpBranch %67
         %67 = OpLabel
         %70 = OpSLessThanEqual %59 %302 %69
               OpBranchConditional %70 %64 %65
         %64 = OpLabel
               OpStore %71 %18
               OpBranch %72
         %72 = OpLabel
        %304 = OpPhi %17 %18 %64 %247 %75
               OpLoopMerge %74 %75 None
               OpBranch %76
         %76 = OpLabel
         %79 = OpSLessThan %59 %304 %302
               OpBranchConditional %79 %73 %74
         %73 = OpLabel
               OpStore %80 %18
               OpBranch %81
         %81 = OpLabel
        %306 = OpPhi %17 %18 %73 %245 %84
               OpLoopMerge %83 %84 None
               OpBranch %85
         %85 = OpLabel
         %87 = OpSLessThan %59 %306 %62
               OpBranchConditional %87 %82 %83
         %82 = OpLabel
               OpSelectionMerge %98 None
               OpSwitch %301 %98 0 %89 1 %90 2 %91 3 %92 4 %93 5 %94 6 %95 7 %96 8 %97
         %89 = OpLabel
        %103 = OpAccessChain %102 %11 %301
        %104 = OpLoad %6 %103
        %105 = OpFAdd %6 %104 %21
               OpStore %103 %105
               OpBranch %98
         %90 = OpLabel
        %111 = OpAccessChain %102 %11 %301
        %112 = OpLoad %6 %111
        %113 = OpFAdd %6 %112 %21
               OpStore %111 %113
               OpBranch %98
         %91 = OpLabel
        %123 = OpAccessChain %47 %45 %18 %69
        %124 = OpLoad %17 %123
        %127 = OpExtInst %17 %1 SClamp %304 %124 %49
               OpStore %130 %121
        %131 = OpAccessChain %102 %130 %127 %306
        %132 = OpLoad %6 %131
        %133 = OpAccessChain %102 %11 %301
        %134 = OpLoad %6 %133
        %135 = OpFAdd %6 %134 %132
               OpStore %133 %135
               OpBranch %98
         %92 = OpLabel
        %144 = OpAccessChain %47 %45 %18 %69
        %145 = OpLoad %17 %144
        %146 = OpAccessChain %47 %45 %18 %62
        %147 = OpLoad %17 %146
        %148 = OpExtInst %17 %1 SClamp %304 %145 %147
               OpStore %151 %142
        %152 = OpAccessChain %102 %151 %148 %306
        %153 = OpLoad %6 %152
        %154 = OpAccessChain %102 %11 %301
        %155 = OpLoad %6 %154
        %156 = OpFAdd %6 %155 %153
               OpStore %154 %156
               OpBranch %98
         %93 = OpLabel
        %165 = OpAccessChain %47 %45 %18 %69
        %166 = OpLoad %17 %165
        %167 = OpAccessChain %47 %45 %18 %62
        %168 = OpLoad %17 %167
        %169 = OpExtInst %17 %1 SClamp %304 %166 %168
               OpStore %172 %163
        %173 = OpAccessChain %102 %172 %169 %306
        %174 = OpLoad %6 %173
        %175 = OpAccessChain %102 %11 %301
        %176 = OpLoad %6 %175
        %177 = OpFAdd %6 %176 %174
               OpStore %175 %177
               OpBranch %98
         %94 = OpLabel
        %184 = OpAccessChain %47 %45 %18 %62
        %185 = OpLoad %17 %184
        %186 = OpExtInst %17 %1 SClamp %304 %18 %185
               OpStore %189 %182
        %190 = OpAccessChain %102 %189 %186 %306
        %191 = OpLoad %6 %190
        %192 = OpAccessChain %102 %11 %301
        %193 = OpLoad %6 %192
        %194 = OpFAdd %6 %193 %191
               OpStore %192 %194
               OpBranch %98
         %95 = OpLabel
        %201 = OpExtInst %17 %1 SClamp %304 %18 %46
               OpStore %204 %199
        %205 = OpAccessChain %102 %204 %201 %306
        %206 = OpLoad %6 %205
        %207 = OpAccessChain %102 %11 %301
        %208 = OpLoad %6 %207
        %209 = OpFAdd %6 %208 %206
               OpStore %207 %209
               OpBranch %98
         %96 = OpLabel
        %216 = OpExtInst %17 %1 SClamp %304 %18 %46
               OpStore %219 %214
        %220 = OpAccessChain %102 %219 %216 %306
        %221 = OpLoad %6 %220
        %222 = OpAccessChain %102 %11 %301
        %223 = OpLoad %6 %222
        %224 = OpFAdd %6 %223 %221
               OpStore %222 %224
               OpBranch %97
         %97 = OpLabel
        %230 = OpAccessChain %47 %45 %18 %18
        %231 = OpLoad %17 %230
        %232 = OpExtInst %17 %1 SClamp %304 %18 %231
               OpStore %235 %228
        %236 = OpAccessChain %102 %235 %232 %306
        %237 = OpLoad %6 %236
        %238 = OpAccessChain %102 %11 %301
        %239 = OpLoad %6 %238
        %240 = OpFAdd %6 %239 %237
               OpStore %238 %240
               OpBranch %98
         %98 = OpLabel
               OpBranch %84
         %84 = OpLabel
        %245 = OpIAdd %17 %306 %56
               OpStore %80 %245
               OpBranch %81
         %83 = OpLabel
               OpBranch %75
         %75 = OpLabel
        %247 = OpIAdd %17 %304 %56
               OpStore %71 %247
               OpBranch %72
         %74 = OpLabel
               OpBranch %66
         %66 = OpLabel
        %249 = OpIAdd %17 %302 %56
               OpStore %61 %249
               OpBranch %63
         %65 = OpLabel
               OpBranch %53
         %53 = OpLabel
        %251 = OpIAdd %17 %301 %56
               OpStore %40 %251
               OpBranch %50
         %52 = OpLabel
        %252 = OpAccessChain %47 %45 %18 %69
        %253 = OpLoad %17 %252
        %254 = OpAccessChain %102 %11 %253
        %255 = OpLoad %6 %254
        %258 = OpFOrdEqual %59 %255 %21
               OpSelectionMerge %260 None
               OpBranchConditional %258 %259 %260
        %259 = OpLabel
        %263 = OpAccessChain %102 %11 %49
        %264 = OpLoad %6 %263
        %265 = OpAccessChain %19 %16 %18 %56
        %266 = OpLoad %6 %265
        %267 = OpFOrdEqual %59 %264 %266
               OpBranch %260
        %260 = OpLabel
        %268 = OpPhi %59 %258 %52 %267 %259
               OpSelectionMerge %270 None
               OpBranchConditional %268 %269 %270
        %269 = OpLabel
        %271 = OpAccessChain %47 %45 %18 %62
        %272 = OpLoad %17 %271
        %273 = OpAccessChain %102 %11 %272
        %274 = OpLoad %6 %273
        %277 = OpFOrdEqual %59 %274 %21
               OpBranch %270
        %270 = OpLabel
        %278 = OpPhi %59 %268 %260 %277 %269
               OpSelectionMerge %280 None
               OpBranchConditional %278 %279 %296
        %279 = OpLabel
        %285 = OpConvertSToF %6 %49
        %288 = OpConvertSToF %6 %253
        %295 = OpCompositeConstruct %117 %285 %288 %288 %285
               OpStore %282 %295
               OpBranch %280
        %296 = OpLabel
        %299 = OpConvertSToF %6 %253
        %300 = OpCompositeConstruct %117 %299 %299 %299 %299
               OpStore %282 %300
               OpBranch %280
        %280 = OpLabel
               OpReturn
               OpFunctionEnd

; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 301
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
         %22 = OpAccessChain %19 %16 %18 %18
         %23 = OpLoad %6 %22
         %24 = OpAccessChain %19 %16 %18 %18
         %25 = OpLoad %6 %24
         %26 = OpAccessChain %19 %16 %18 %18
         %27 = OpLoad %6 %26
         %28 = OpAccessChain %19 %16 %18 %18
         %29 = OpLoad %6 %28
         %30 = OpAccessChain %19 %16 %18 %18
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %19 %16 %18 %18
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %19 %16 %18 %18
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %19 %16 %18 %18
         %37 = OpLoad %6 %36
         %38 = OpCompositeConstruct %9 %21 %23 %25 %27 %29 %31 %33 %35 %37
               OpStore %11 %38
         %48 = OpAccessChain %47 %45 %18 %46
         %49 = OpLoad %17 %48
               OpStore %40 %49
               OpBranch %50
         %50 = OpLabel
               OpLoopMerge %52 %53 None
               OpBranch %54
         %54 = OpLabel
         %55 = OpLoad %17 %40
         %57 = OpAccessChain %47 %45 %18 %56
         %58 = OpLoad %17 %57
         %60 = OpSLessThan %59 %55 %58
               OpBranchConditional %60 %51 %52
         %51 = OpLabel
               OpStore %61 %62
               OpBranch %63
         %63 = OpLabel
               OpLoopMerge %65 %66 None
               OpBranch %67
         %67 = OpLabel
         %68 = OpLoad %17 %61
         %70 = OpSLessThanEqual %59 %68 %69
               OpBranchConditional %70 %64 %65
         %64 = OpLabel
               OpStore %71 %18
               OpBranch %72
         %72 = OpLabel
               OpLoopMerge %74 %75 None
               OpBranch %76
         %76 = OpLabel
         %77 = OpLoad %17 %71
         %78 = OpLoad %17 %61
         %79 = OpSLessThan %59 %77 %78
               OpBranchConditional %79 %73 %74
         %73 = OpLabel
               OpStore %80 %18
               OpBranch %81
         %81 = OpLabel
               OpLoopMerge %83 %84 None
               OpBranch %85
         %85 = OpLabel
         %86 = OpLoad %17 %80
         %87 = OpSLessThan %59 %86 %62
               OpBranchConditional %87 %82 %83
         %82 = OpLabel
         %88 = OpLoad %17 %40
               OpSelectionMerge %98 None
               OpSwitch %88 %98 0 %89 1 %90 2 %91 3 %92 4 %93 5 %94 6 %95 7 %96 8 %97
         %89 = OpLabel
         %99 = OpLoad %17 %40
        %100 = OpAccessChain %19 %16 %18 %18
        %101 = OpLoad %6 %100
        %103 = OpAccessChain %102 %11 %99
        %104 = OpLoad %6 %103
        %105 = OpFAdd %6 %104 %101
        %106 = OpAccessChain %102 %11 %99
               OpStore %106 %105
               OpBranch %98
         %90 = OpLabel
        %108 = OpLoad %17 %40
        %109 = OpAccessChain %19 %16 %18 %18
        %110 = OpLoad %6 %109
        %111 = OpAccessChain %102 %11 %108
        %112 = OpLoad %6 %111
        %113 = OpFAdd %6 %112 %110
        %114 = OpAccessChain %102 %11 %108
               OpStore %114 %113
               OpBranch %98
         %91 = OpLabel
        %116 = OpLoad %17 %40
        %122 = OpLoad %17 %71
        %123 = OpAccessChain %47 %45 %18 %69
        %124 = OpLoad %17 %123
        %125 = OpAccessChain %47 %45 %18 %46
        %126 = OpLoad %17 %125
        %127 = OpExtInst %17 %1 SClamp %122 %124 %126
        %128 = OpLoad %17 %80
               OpStore %130 %121
        %131 = OpAccessChain %102 %130 %127 %128
        %132 = OpLoad %6 %131
        %133 = OpAccessChain %102 %11 %116
        %134 = OpLoad %6 %133
        %135 = OpFAdd %6 %134 %132
        %136 = OpAccessChain %102 %11 %116
               OpStore %136 %135
               OpBranch %98
         %92 = OpLabel
        %138 = OpLoad %17 %40
        %143 = OpLoad %17 %71
        %144 = OpAccessChain %47 %45 %18 %69
        %145 = OpLoad %17 %144
        %146 = OpAccessChain %47 %45 %18 %62
        %147 = OpLoad %17 %146
        %148 = OpExtInst %17 %1 SClamp %143 %145 %147
        %149 = OpLoad %17 %80
               OpStore %151 %142
        %152 = OpAccessChain %102 %151 %148 %149
        %153 = OpLoad %6 %152
        %154 = OpAccessChain %102 %11 %138
        %155 = OpLoad %6 %154
        %156 = OpFAdd %6 %155 %153
        %157 = OpAccessChain %102 %11 %138
               OpStore %157 %156
               OpBranch %98
         %93 = OpLabel
        %159 = OpLoad %17 %40
        %164 = OpLoad %17 %71
        %165 = OpAccessChain %47 %45 %18 %69
        %166 = OpLoad %17 %165
        %167 = OpAccessChain %47 %45 %18 %62
        %168 = OpLoad %17 %167
        %169 = OpExtInst %17 %1 SClamp %164 %166 %168
        %170 = OpLoad %17 %80
               OpStore %172 %163
        %173 = OpAccessChain %102 %172 %169 %170
        %174 = OpLoad %6 %173
        %175 = OpAccessChain %102 %11 %159
        %176 = OpLoad %6 %175
        %177 = OpFAdd %6 %176 %174
        %178 = OpAccessChain %102 %11 %159
               OpStore %178 %177
               OpBranch %98
         %94 = OpLabel
        %180 = OpLoad %17 %40
        %183 = OpLoad %17 %71
        %184 = OpAccessChain %47 %45 %18 %62
        %185 = OpLoad %17 %184
        %186 = OpExtInst %17 %1 SClamp %183 %18 %185
        %187 = OpLoad %17 %80
               OpStore %189 %182
        %190 = OpAccessChain %102 %189 %186 %187
        %191 = OpLoad %6 %190
        %192 = OpAccessChain %102 %11 %180
        %193 = OpLoad %6 %192
        %194 = OpFAdd %6 %193 %191
        %195 = OpAccessChain %102 %11 %180
               OpStore %195 %194
               OpBranch %98
         %95 = OpLabel
        %197 = OpLoad %17 %40
        %200 = OpLoad %17 %71
        %201 = OpExtInst %17 %1 SClamp %200 %18 %46
        %202 = OpLoad %17 %80
               OpStore %204 %199
        %205 = OpAccessChain %102 %204 %201 %202
        %206 = OpLoad %6 %205
        %207 = OpAccessChain %102 %11 %197
        %208 = OpLoad %6 %207
        %209 = OpFAdd %6 %208 %206
        %210 = OpAccessChain %102 %11 %197
               OpStore %210 %209
               OpBranch %98
         %96 = OpLabel
        %212 = OpLoad %17 %40
        %215 = OpLoad %17 %71
        %216 = OpExtInst %17 %1 SClamp %215 %18 %46
        %217 = OpLoad %17 %80
               OpStore %219 %214
        %220 = OpAccessChain %102 %219 %216 %217
        %221 = OpLoad %6 %220
        %222 = OpAccessChain %102 %11 %212
        %223 = OpLoad %6 %222
        %224 = OpFAdd %6 %223 %221
        %225 = OpAccessChain %102 %11 %212
               OpStore %225 %224
               OpBranch %97
         %97 = OpLabel
        %226 = OpLoad %17 %40
        %229 = OpLoad %17 %71
        %230 = OpAccessChain %47 %45 %18 %18
        %231 = OpLoad %17 %230
        %232 = OpExtInst %17 %1 SClamp %229 %18 %231
        %233 = OpLoad %17 %80
               OpStore %235 %228
        %236 = OpAccessChain %102 %235 %232 %233
        %237 = OpLoad %6 %236
        %238 = OpAccessChain %102 %11 %226
        %239 = OpLoad %6 %238
        %240 = OpFAdd %6 %239 %237
        %241 = OpAccessChain %102 %11 %226
               OpStore %241 %240
               OpBranch %98
         %98 = OpLabel
               OpBranch %84
         %84 = OpLabel
        %244 = OpLoad %17 %80
        %245 = OpIAdd %17 %244 %56
               OpStore %80 %245
               OpBranch %81
         %83 = OpLabel
               OpBranch %75
         %75 = OpLabel
        %246 = OpLoad %17 %71
        %247 = OpIAdd %17 %246 %56
               OpStore %71 %247
               OpBranch %72
         %74 = OpLabel
               OpBranch %66
         %66 = OpLabel
        %248 = OpLoad %17 %61
        %249 = OpIAdd %17 %248 %56
               OpStore %61 %249
               OpBranch %63
         %65 = OpLabel
               OpBranch %53
         %53 = OpLabel
        %250 = OpLoad %17 %40
        %251 = OpIAdd %17 %250 %56
               OpStore %40 %251
               OpBranch %50
         %52 = OpLabel
        %252 = OpAccessChain %47 %45 %18 %69
        %253 = OpLoad %17 %252
        %254 = OpAccessChain %102 %11 %253
        %255 = OpLoad %6 %254
        %256 = OpAccessChain %19 %16 %18 %18
        %257 = OpLoad %6 %256
        %258 = OpFOrdEqual %59 %255 %257
               OpSelectionMerge %260 None
               OpBranchConditional %258 %259 %260
        %259 = OpLabel
        %261 = OpAccessChain %47 %45 %18 %46
        %262 = OpLoad %17 %261
        %263 = OpAccessChain %102 %11 %262
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
        %275 = OpAccessChain %19 %16 %18 %18
        %276 = OpLoad %6 %275
        %277 = OpFOrdEqual %59 %274 %276
               OpBranch %270
        %270 = OpLabel
        %278 = OpPhi %59 %268 %260 %277 %269
               OpSelectionMerge %280 None
               OpBranchConditional %278 %279 %296
        %279 = OpLabel
        %283 = OpAccessChain %47 %45 %18 %46
        %284 = OpLoad %17 %283
        %285 = OpConvertSToF %6 %284
        %286 = OpAccessChain %47 %45 %18 %69
        %287 = OpLoad %17 %286
        %288 = OpConvertSToF %6 %287
        %289 = OpAccessChain %47 %45 %18 %69
        %290 = OpLoad %17 %289
        %291 = OpConvertSToF %6 %290
        %292 = OpAccessChain %47 %45 %18 %46
        %293 = OpLoad %17 %292
        %294 = OpConvertSToF %6 %293
        %295 = OpCompositeConstruct %117 %285 %288 %291 %294
               OpStore %282 %295
               OpBranch %280
        %296 = OpLabel
        %297 = OpAccessChain %47 %45 %18 %69
        %298 = OpLoad %17 %297
        %299 = OpConvertSToF %6 %298
        %300 = OpCompositeConstruct %117 %299 %299 %299 %299
               OpStore %282 %300
               OpBranch %280
        %280 = OpLabel
               OpReturn
               OpFunctionEnd

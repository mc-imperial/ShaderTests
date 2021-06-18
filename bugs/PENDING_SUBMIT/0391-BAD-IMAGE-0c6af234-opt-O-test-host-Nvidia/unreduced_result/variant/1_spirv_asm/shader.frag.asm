; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 466
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52 %98
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "uvstep"
               OpName %25 "buf_push"
               OpMemberName %25 0 "injectionSwitch"
               OpName %27 ""
               OpName %47 "slope"
               OpName %49 "coord"
               OpName %52 "gl_FragCoord"
               OpName %69 "refh"
               OpName %73 "tex"
               OpName %84 "h"
               OpName %98 "_GLF_color"
               OpDecorate %8 RelaxedPrecision
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %52 BuiltIn FragCoord
               OpDecorate %73 RelaxedPrecision
               OpDecorate %73 DescriptorSet 0
               OpDecorate %73 Binding 0
               OpDecorate %74 RelaxedPrecision
               OpDecorate %76 RelaxedPrecision
               OpDecorate %77 RelaxedPrecision
               OpDecorate %93 RelaxedPrecision
               OpDecorate %95 RelaxedPrecision
               OpDecorate %98 Location 0
               OpDecorate %117 RelaxedPrecision
               OpDecorate %119 RelaxedPrecision
               OpDecorate %128 RelaxedPrecision
               OpDecorate %130 RelaxedPrecision
               OpDecorate %140 RelaxedPrecision
               OpDecorate %142 RelaxedPrecision
               OpDecorate %172 RelaxedPrecision
               OpDecorate %174 RelaxedPrecision
               OpDecorate %183 RelaxedPrecision
               OpDecorate %184 RelaxedPrecision
               OpDecorate %188 RelaxedPrecision
               OpDecorate %190 RelaxedPrecision
               OpDecorate %191 RelaxedPrecision
               OpDecorate %196 RelaxedPrecision
               OpDecorate %197 RelaxedPrecision
               OpDecorate %198 RelaxedPrecision
               OpDecorate %199 RelaxedPrecision
               OpDecorate %200 RelaxedPrecision
               OpDecorate %228 RelaxedPrecision
               OpDecorate %230 RelaxedPrecision
               OpDecorate %231 RelaxedPrecision
               OpDecorate %233 RelaxedPrecision
               OpDecorate %234 RelaxedPrecision
               OpDecorate %281 RelaxedPrecision
               OpDecorate %283 RelaxedPrecision
               OpDecorate %301 RelaxedPrecision
               OpDecorate %303 RelaxedPrecision
               OpDecorate %307 RelaxedPrecision
               OpDecorate %309 RelaxedPrecision
               OpDecorate %313 RelaxedPrecision
               OpDecorate %314 RelaxedPrecision
               OpDecorate %316 RelaxedPrecision
               OpDecorate %317 RelaxedPrecision
               OpDecorate %317 RelaxedPrecision
               OpDecorate %318 RelaxedPrecision
               OpDecorate %320 RelaxedPrecision
               OpDecorate %330 RelaxedPrecision
               OpDecorate %332 RelaxedPrecision
               OpDecorate %336 RelaxedPrecision
               OpDecorate %338 RelaxedPrecision
               OpDecorate %343 RelaxedPrecision
               OpDecorate %345 RelaxedPrecision
               OpDecorate %355 RelaxedPrecision
               OpDecorate %357 RelaxedPrecision
               OpDecorate %361 RelaxedPrecision
               OpDecorate %363 RelaxedPrecision
               OpDecorate %367 RelaxedPrecision
               OpDecorate %369 RelaxedPrecision
               OpDecorate %379 RelaxedPrecision
               OpDecorate %381 RelaxedPrecision
               OpDecorate %386 RelaxedPrecision
               OpDecorate %388 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypePointer Function %11
         %14 = OpConstant %10 1
         %15 = OpConstantComposite %11 %14 %14
         %16 = OpConstant %10 0.00390625
         %17 = OpTypeBool
         %18 = OpConstantFalse %17
         %19 = OpTypePointer Function %10
         %23 = OpConstant %10 1031.64209
         %25 = OpTypeStruct %11
         %26 = OpTypePointer PushConstant %25
         %27 = OpVariable %26 PushConstant
         %28 = OpTypeInt 32 0
         %29 = OpConstant %28 1
         %30 = OpTypePointer PushConstant %10
         %44 = OpConstant %10 0
         %45 = OpConstantComposite %11 %44 %44
         %48 = OpConstant %10 0.0078125
         %50 = OpTypeVector %10 4
         %51 = OpTypePointer Input %50
         %52 = OpVariable %51 Input
         %55 = OpConstant %28 0
         %56 = OpTypePointer Input %10
         %60 = OpConstant %10 -80.0800018
         %65 = OpConstant %10 256
         %70 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %71 = OpTypeSampledImage %70
         %72 = OpTypePointer UniformConstant %71
         %73 = OpVariable %72 UniformConstant
         %85 = OpConstantTrue %17
         %89 = OpTypePointer Function %50
         %97 = OpTypePointer Output %50
         %98 = OpVariable %97 Output
        %104 = OpConstant %28 3
        %105 = OpTypePointer Output %10
        %109 = OpConstant %10 5.9000001
        %110 = OpConstant %10 2.20000005
        %111 = OpConstant %10 5369.00391
        %113 = OpConstant %10 8.19999981
        %134 = OpConstant %28 2
        %148 = OpTypeVector %10 3
        %149 = OpTypeMatrix %148 3
        %156 = OpTypeVector %17 4
        %157 = OpConstantComposite %156 %18 %85 %85 %85
        %173 = OpConstant %6 32
        %177 = OpConstant %28 166365
        %180 = OpConstant %6 1
        %216 = OpTypeVector %17 3
        %236 = OpConstantComposite %50 %44 %44 %44 %44
        %242 = OpConstant %10 -19.4500008
        %243 = OpConstant %10 -5.69999981
        %248 = OpConstant %10 -4.5
        %250 = OpConstant %10 480.10199
        %251 = OpConstant %10 42.6399994
        %286 = OpConstant %10 8841.63574
        %293 = OpTypeMatrix %148 4
        %315 = OpTypeVector %6 2
        %394 = OpTypeMatrix %11 2
        %415 = OpTypePointer Function %149
        %419 = OpConstant %10 -8627.52734
        %420 = OpConstant %10 -2.0999999
        %421 = OpConstant %10 -8.10000038
        %422 = OpConstantComposite %148 %419 %420 %421
        %423 = OpConstant %10 -5278.63818
        %424 = OpConstant %10 5134.05322
        %425 = OpConstant %10 453.782013
        %426 = OpConstantComposite %148 %423 %424 %425
        %427 = OpConstant %10 97.4400024
        %428 = OpConstant %10 9724.7373
        %429 = OpConstant %10 243.533005
        %430 = OpConstantComposite %148 %427 %428 %429
        %431 = OpConstantComposite %149 %422 %426 %430
        %433 = OpConstantComposite %148 %14 %14 %14
        %434 = OpConstantComposite %149 %433 %433 %433
        %453 = OpConstant %10 0.03125
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %20 = OpVariable %19 Function
         %47 = OpVariable %19 Function
         %49 = OpVariable %12 Function
         %69 = OpVariable %19 Function
         %84 = OpVariable %19 Function
         %86 = OpVariable %19 Function
         %90 = OpVariable %89 Function
        %114 = OpVariable %89 Function
        %125 = OpVariable %89 Function
        %137 = OpVariable %89 Function
        %174 = OpVariable %7 Function
        %184 = OpVariable %7 Function
        %191 = OpVariable %7 Function
        %416 = OpVariable %415 Function
               OpStore %8 %9
               OpSelectionMerge %22 None
               OpBranchConditional %18 %21 %24
         %21 = OpLabel
               OpStore %20 %23
               OpBranch %22
         %24 = OpLabel
         %31 = OpAccessChain %30 %27 %9 %29
         %32 = OpLoad %10 %31
               OpStore %20 %32
               OpBranch %22
         %22 = OpLabel
         %33 = OpLoad %10 %20
         %34 = OpAccessChain %30 %27 %9 %29
         %35 = OpLoad %10 %34
         %36 = OpAccessChain %30 %27 %9 %29
         %37 = OpLoad %10 %36
         %38 = OpExtInst %10 %1 FMax %35 %37
         %39 = OpExtInst %10 %1 FMin %33 %38
         %40 = OpFDiv %10 %16 %39
         %41 = OpExtInst %10 %1 FMax %40 %16
         %42 = OpVectorTimesScalar %11 %15 %41
         %43 = OpFMul %11 %15 %42
         %46 = OpFSub %11 %43 %45
               OpStore %13 %46
               OpStore %47 %48
         %53 = OpLoad %50 %52
         %54 = OpVectorShuffle %11 %53 %53 0 1
         %57 = OpAccessChain %56 %52 %55
         %58 = OpLoad %10 %57
         %59 = OpFOrdLessThan %17 %58 %44
         %61 = OpSelect %10 %59 %60 %14
         %62 = OpExtInst %10 %1 FMin %14 %61
         %63 = OpFMul %10 %62 %14
         %64 = OpExtInst %10 %1 FMin %14 %63
         %66 = OpFDiv %10 %64 %65
         %67 = OpFDiv %10 %66 %14
         %68 = OpVectorTimesScalar %11 %54 %67
               OpStore %49 %68
         %74 = OpLoad %71 %73
         %75 = OpLoad %11 %49
         %76 = OpImageSampleImplicitLod %50 %74 %75
         %77 = OpCompositeExtract %10 %76 1
               OpStore %69 %77
         %78 = OpLoad %11 %13
         %79 = OpLoad %11 %49
         %80 = OpFSub %11 %79 %78
               OpStore %49 %80
         %81 = OpLoad %10 %47
         %82 = OpLoad %10 %69
         %83 = OpFAdd %10 %82 %81
               OpStore %69 %83
               OpSelectionMerge %88 None
               OpBranchConditional %85 %87 %103
         %87 = OpLabel
               OpSelectionMerge %92 None
               OpBranchConditional %85 %91 %96
         %91 = OpLabel
         %93 = OpLoad %71 %73
         %94 = OpLoad %11 %49
         %95 = OpImageSampleImplicitLod %50 %93 %94
               OpStore %90 %95
               OpBranch %92
         %96 = OpLabel
         %99 = OpLoad %50 %98
        %100 = OpExtInst %50 %1 Acosh %99
               OpStore %90 %100
               OpBranch %92
         %92 = OpLabel
        %101 = OpAccessChain %19 %90 %55
        %102 = OpLoad %10 %101
               OpStore %86 %102
               OpBranch %88
        %103 = OpLabel
        %106 = OpAccessChain %105 %98 %104
        %107 = OpLoad %10 %106
               OpStore %86 %107
               OpBranch %88
         %88 = OpLabel
        %108 = OpLoad %10 %86
        %112 = OpCompositeConstruct %50 %108 %109 %110 %111
               OpSelectionMerge %116 None
               OpBranchConditional %85 %115 %120
        %115 = OpLabel
        %117 = OpLoad %71 %73
        %118 = OpLoad %11 %49
        %119 = OpImageSampleImplicitLod %50 %117 %118
               OpStore %114 %119
               OpBranch %116
        %120 = OpLabel
        %121 = OpLoad %50 %98
        %122 = OpExtInst %50 %1 Acosh %121
               OpStore %114 %122
               OpBranch %116
        %116 = OpLabel
        %123 = OpAccessChain %19 %114 %29
        %124 = OpLoad %10 %123
               OpSelectionMerge %127 None
               OpBranchConditional %85 %126 %131
        %126 = OpLabel
        %128 = OpLoad %71 %73
        %129 = OpLoad %11 %49
        %130 = OpImageSampleImplicitLod %50 %128 %129
               OpStore %125 %130
               OpBranch %127
        %131 = OpLabel
        %132 = OpLoad %50 %98
        %133 = OpExtInst %50 %1 Acosh %132
               OpStore %125 %133
               OpBranch %127
        %127 = OpLabel
        %135 = OpAccessChain %19 %125 %134
        %136 = OpLoad %10 %135
               OpSelectionMerge %139 None
               OpBranchConditional %85 %138 %143
        %138 = OpLabel
        %140 = OpLoad %71 %73
        %141 = OpLoad %11 %49
        %142 = OpImageSampleImplicitLod %50 %140 %141
               OpStore %137 %142
               OpBranch %139
        %143 = OpLabel
        %144 = OpLoad %50 %98
        %145 = OpExtInst %50 %1 Acosh %144
               OpStore %137 %145
               OpBranch %139
        %139 = OpLabel
        %146 = OpAccessChain %19 %137 %104
        %147 = OpLoad %10 %146
        %150 = OpCompositeConstruct %148 %147 %14 %14
        %151 = OpCompositeConstruct %148 %44 %44 %44
        %152 = OpCompositeConstruct %148 %44 %14 %14
        %153 = OpCompositeConstruct %149 %150 %151 %152
        %154 = OpCompositeExtract %10 %153 0 0
        %155 = OpCompositeConstruct %50 %113 %124 %136 %154
        %158 = OpSelect %50 %157 %155 %112
        %159 = OpCompositeExtract %10 %158 1
               OpStore %84 %159
               OpBranch %160
        %160 = OpLabel
               OpLoopMerge %162 %163 None
               OpBranch %164
        %164 = OpLabel
        %165 = OpLoad %10 %84
        %166 = OpLoad %10 %47
        %167 = OpLoad %10 %69
        %168 = OpSelect %10 %18 %166 %167
        %169 = OpFOrdLessThan %17 %165 %168
               OpSelectionMerge %171 None
               OpBranchConditional %169 %170 %171
        %170 = OpLabel
        %172 = OpLoad %6 %8
               OpSelectionMerge %176 None
               OpBranchConditional %18 %175 %179
        %175 = OpLabel
        %178 = OpExtInst %6 %1 FindUMsb %177
               OpStore %174 %178
               OpBranch %176
        %179 = OpLabel
        %181 = OpLoad %6 %8
        %182 = OpSelect %6 %85 %180 %181
               OpStore %174 %182
               OpBranch %176
        %176 = OpLabel
        %183 = OpLoad %6 %174
               OpSelectionMerge %186 None
               OpBranchConditional %18 %185 %189
        %185 = OpLabel
        %187 = OpExtInst %6 %1 FindUMsb %177
        %188 = OpBitwiseXor %6 %187 %9
               OpStore %184 %188
               OpBranch %186
        %189 = OpLabel
               OpStore %184 %180
               OpBranch %186
        %186 = OpLabel
        %190 = OpLoad %6 %184
               OpSelectionMerge %193 None
               OpBranchConditional %18 %192 %195
        %192 = OpLabel
        %194 = OpExtInst %6 %1 FindUMsb %177
               OpStore %191 %194
               OpBranch %193
        %195 = OpLabel
               OpStore %191 %180
               OpBranch %193
        %193 = OpLabel
        %196 = OpLoad %6 %191
        %197 = OpExtInst %6 %1 SClamp %183 %190 %196
        %198 = OpSDiv %6 %197 %180
        %199 = OpIAdd %6 %198 %9
        %200 = OpSDiv %6 %173 %199
        %201 = OpSLessThan %17 %172 %200
               OpBranch %171
        %171 = OpLabel
        %202 = OpPhi %17 %169 %164 %201 %193
               OpBranchConditional %202 %161 %162
        %161 = OpLabel
        %203 = OpLoad %11 %13
        %204 = OpLoad %11 %49
        %205 = OpFSub %11 %204 %203
               OpStore %49 %205
        %206 = OpFAdd %11 %205 %45
        %207 = OpLoad %10 %47
        %208 = OpLoad %10 %69
        %209 = OpFAdd %10 %208 %207
               OpStore %69 %209
               OpSelectionMerge %211 None
               OpBranchConditional %85 %210 %211
        %210 = OpLabel
        %212 = OpAccessChain %56 %52 %29
        %213 = OpLoad %10 %212
        %214 = OpFOrdGreaterThanEqual %17 %213 %44
        %215 = OpLogicalAnd %17 %214 %85
        %217 = OpCompositeConstruct %216 %215 %18 %85
        %218 = OpCompositeExtract %17 %217 0
        %219 = OpLogicalNot %17 %218
        %220 = OpCompositeConstruct %216 %219 %18 %85
        %221 = OpCompositeExtract %17 %220 0
               OpBranch %211
        %211 = OpLabel
        %222 = OpPhi %17 %85 %161 %221 %210
        %223 = OpLogicalNot %17 %222
        %224 = OpLogicalNot %17 %223
        %225 = OpLogicalNot %17 %224
               OpSelectionMerge %227 None
               OpBranchConditional %225 %226 %227
        %226 = OpLabel
        %228 = OpLoad %71 %73
        %229 = OpLoad %11 %49
        %230 = OpImageSampleImplicitLod %50 %228 %229
        %231 = OpCompositeExtract %10 %230 1
               OpStore %84 %231
        %232 = OpFMul %10 %231 %14
               OpBranch %227
        %227 = OpLabel
        %233 = OpLoad %6 %8
        %234 = OpIAdd %6 %233 %180
               OpStore %8 %234
               OpBranch %163
        %163 = OpLabel
               OpBranch %160
        %162 = OpLabel
        %235 = OpLoad %50 %52
        %237 = OpFSub %50 %235 %236
        %238 = OpCompositeExtract %10 %237 0
        %239 = OpLoad %50 %52
        %240 = OpFSub %50 %239 %236
        %241 = OpCompositeExtract %10 %240 1
        %244 = OpLoad %10 %69
        %245 = OpSelect %10 %18 %244 %242
        %246 = OpSelect %10 %85 %245 %243
        %247 = OpExtInst %10 %1 FClamp %242 %242 %246
        %249 = OpCompositeConstruct %50 %238 %241 %247 %248
        %252 = OpLoad %50 %52
        %253 = OpFSub %50 %252 %236
        %254 = OpCompositeExtract %10 %253 2
        %255 = OpLoad %50 %52
        %256 = OpFSub %50 %255 %236
        %257 = OpCompositeExtract %10 %256 3
        %258 = OpCompositeConstruct %50 %250 %251 %254 %257
        %259 = OpAccessChain %56 %52 %55
        %260 = OpLoad %10 %259
        %261 = OpFOrdGreaterThanEqual %17 %260 %44
        %262 = OpCompositeConstruct %156 %18 %18 %261 %85
        %263 = OpSelect %50 %262 %258 %249
        %264 = OpCompositeExtract %10 %263 1
        %265 = OpFOrdLessThan %17 %264 %44
        %266 = OpLogicalNot %17 %265
               OpSelectionMerge %268 None
               OpBranchConditional %266 %267 %268
        %267 = OpLabel
        %269 = OpAccessChain %56 %52 %29
        %270 = OpLoad %10 %269
        %271 = OpFOrdLessThan %17 %270 %44
               OpBranch %268
        %268 = OpLabel
        %272 = OpPhi %17 %265 %162 %271 %267
        %273 = OpLogicalOr %17 %272 %18
               OpSelectionMerge %275 None
               OpBranchConditional %273 %274 %276
        %274 = OpLabel
               OpBranch %275
        %276 = OpLabel
               OpBranch %277
        %277 = OpLabel
               OpLoopMerge %279 %280 None
               OpBranch %278
        %278 = OpLabel
        %281 = OpLoad %6 %8
        %282 = OpConvertSToF %10 %281
        %283 = OpLoad %6 %8
        %284 = OpConvertSToF %10 %283
        %285 = OpExtInst %10 %1 FMin %282 %284
        %287 = OpAccessChain %30 %27 %9 %55
        %288 = OpLoad %10 %287
        %289 = OpAccessChain %30 %27 %9 %29
        %290 = OpLoad %10 %289
        %291 = OpFOrdLessThan %17 %288 %290
        %292 = OpSelect %10 %291 %14 %286
        %294 = OpCompositeConstruct %148 %285 %14 %44
        %295 = OpCompositeConstruct %148 %14 %292 %14
        %296 = OpCompositeConstruct %148 %44 %14 %14
        %297 = OpCompositeConstruct %148 %44 %44 %14
        %298 = OpCompositeConstruct %293 %294 %295 %296 %297
        %299 = OpCompositeExtract %10 %298 0 0
        %300 = OpFAdd %10 %299 %44
        %301 = OpLoad %6 %8
        %302 = OpConvertSToF %10 %301
        %303 = OpLoad %6 %8
        %304 = OpConvertSToF %10 %303
        %305 = OpExtInst %10 %1 FMin %302 %304
        %306 = OpExtInst %10 %1 FMax %300 %305
        %307 = OpLoad %6 %8
        %308 = OpConvertSToF %10 %307
        %309 = OpLoad %6 %8
        %310 = OpConvertSToF %10 %309
        %311 = OpExtInst %10 %1 FMin %308 %310
        %312 = OpExtInst %10 %1 FMax %306 %311
        %313 = OpLoad %6 %8
        %314 = OpLoad %6 %8
        %316 = OpCompositeConstruct %315 %314 %180
        %317 = OpCompositeExtract %6 %316 0
        %318 = OpBitwiseOr %6 %313 %317
        %319 = OpConvertSToF %10 %318
        %320 = OpLoad %6 %8
        %321 = OpConvertSToF %10 %320
        %322 = OpExtInst %10 %1 FMin %319 %321
        %323 = OpCompositeConstruct %148 %322 %14 %44
        %324 = OpCompositeConstruct %148 %14 %14 %14
        %325 = OpCompositeConstruct %148 %44 %14 %14
        %326 = OpCompositeConstruct %148 %44 %44 %14
        %327 = OpCompositeConstruct %293 %323 %324 %325 %326
        %328 = OpCompositeExtract %10 %327 0 0
        %329 = OpFAdd %10 %328 %44
        %330 = OpLoad %6 %8
        %331 = OpConvertSToF %10 %330
        %332 = OpLoad %6 %8
        %333 = OpConvertSToF %10 %332
        %334 = OpExtInst %10 %1 FMin %331 %333
        %335 = OpExtInst %10 %1 FMax %329 %334
        %336 = OpLoad %6 %8
        %337 = OpConvertSToF %10 %336
        %338 = OpLoad %6 %8
        %339 = OpConvertSToF %10 %338
        %340 = OpExtInst %10 %1 FMin %337 %339
        %341 = OpExtInst %10 %1 FMax %335 %340
        %342 = OpExtInst %10 %1 FMin %312 %341
        %343 = OpLoad %6 %8
        %344 = OpConvertSToF %10 %343
        %345 = OpLoad %6 %8
        %346 = OpConvertSToF %10 %345
        %347 = OpExtInst %10 %1 FMin %344 %346
        %348 = OpCompositeConstruct %148 %347 %14 %44
        %349 = OpCompositeConstruct %148 %14 %14 %14
        %350 = OpCompositeConstruct %148 %44 %14 %14
        %351 = OpCompositeConstruct %148 %44 %44 %14
        %352 = OpCompositeConstruct %293 %348 %349 %350 %351
        %353 = OpCompositeExtract %10 %352 0 0
        %354 = OpFAdd %10 %353 %44
        %355 = OpLoad %6 %8
        %356 = OpConvertSToF %10 %355
        %357 = OpLoad %6 %8
        %358 = OpConvertSToF %10 %357
        %359 = OpExtInst %10 %1 FMin %356 %358
        %360 = OpExtInst %10 %1 FMax %354 %359
        %361 = OpLoad %6 %8
        %362 = OpConvertSToF %10 %361
        %363 = OpLoad %6 %8
        %364 = OpConvertSToF %10 %363
        %365 = OpExtInst %10 %1 FMin %362 %364
        %366 = OpExtInst %10 %1 FMax %360 %365
        %367 = OpLoad %6 %8
        %368 = OpConvertSToF %10 %367
        %369 = OpLoad %6 %8
        %370 = OpConvertSToF %10 %369
        %371 = OpExtInst %10 %1 FMin %368 %370
        %372 = OpCompositeConstruct %148 %371 %14 %44
        %373 = OpCompositeConstruct %148 %14 %14 %14
        %374 = OpCompositeConstruct %148 %44 %14 %14
        %375 = OpCompositeConstruct %148 %44 %44 %14
        %376 = OpCompositeConstruct %293 %372 %373 %374 %375
        %377 = OpCompositeExtract %10 %376 0 0
        %378 = OpFAdd %10 %377 %44
        %379 = OpLoad %6 %8
        %380 = OpConvertSToF %10 %379
        %381 = OpLoad %6 %8
        %382 = OpConvertSToF %10 %381
        %383 = OpExtInst %10 %1 FMin %380 %382
        %384 = OpExtInst %10 %1 FMax %378 %383
        %385 = OpFSub %10 %384 %44
        %386 = OpLoad %6 %8
        %387 = OpConvertSToF %10 %386
        %388 = OpLoad %6 %8
        %389 = OpConvertSToF %10 %388
        %390 = OpExtInst %10 %1 FMin %387 %389
        %391 = OpExtInst %10 %1 FMax %385 %390
        %392 = OpExtInst %10 %1 FMin %366 %391
        %393 = OpExtInst %10 %1 FMin %342 %392
        %395 = OpCompositeConstruct %11 %393 %44
        %396 = OpCompositeConstruct %11 %44 %44
        %397 = OpCompositeConstruct %394 %395 %396
        %398 = OpCompositeExtract %10 %397 0 0
        %399 = OpFDiv %10 %398 %14
        %400 = OpFSub %10 %399 %44
        %401 = OpAccessChain %30 %27 %9 %55
        %402 = OpLoad %10 %401
        %403 = OpLoad %10 %69
        %404 = OpSelect %10 %85 %44 %403
        %405 = OpCompositeConstruct %148 %404 %44 %44
        %406 = OpCompositeConstruct %148 %44 %14 %14
        %407 = OpCompositeConstruct %148 %14 %44 %14
        %408 = OpCompositeConstruct %148 %44 %44 %14
        %409 = OpCompositeConstruct %293 %405 %406 %407 %408
        %410 = OpCompositeExtract %10 %409 0 0
        %411 = OpCompositeConstruct %148 %400 %14 %44
        %412 = OpCompositeConstruct %148 %402 %44 %14
        %413 = OpCompositeConstruct %148 %410 %44 %14
        %414 = OpCompositeConstruct %149 %411 %412 %413
               OpSelectionMerge %418 None
               OpBranchConditional %18 %417 %432
        %417 = OpLabel
               OpStore %416 %431
               OpBranch %418
        %432 = OpLabel
        %435 = OpTranspose %149 %434
        %436 = OpTranspose %149 %435
        %437 = OpTranspose %149 %436
        %438 = OpTranspose %149 %437
               OpStore %416 %438
               OpBranch %418
        %418 = OpLabel
        %439 = OpLoad %149 %416
        %440 = OpTranspose %149 %439
        %441 = OpTranspose %149 %440
        %442 = OpCompositeExtract %148 %414 0
        %443 = OpCompositeExtract %148 %441 0
        %444 = OpFDiv %148 %442 %443
        %445 = OpCompositeExtract %148 %414 1
        %446 = OpCompositeExtract %148 %441 1
        %447 = OpFDiv %148 %445 %446
        %448 = OpCompositeExtract %148 %414 2
        %449 = OpCompositeExtract %148 %441 2
        %450 = OpFDiv %148 %448 %449
        %451 = OpCompositeConstruct %149 %444 %447 %450
        %452 = OpCompositeExtract %10 %451 0 0
        %454 = OpFMul %10 %452 %453
        %455 = OpCompositeConstruct %148 %454 %454 %454
        %456 = OpCompositeExtract %10 %455 0
        %457 = OpCompositeExtract %10 %455 1
        %458 = OpCompositeExtract %10 %455 2
        %459 = OpCompositeConstruct %50 %456 %457 %458 %14
               OpStore %98 %459
               OpBranch %280
        %280 = OpLabel
        %460 = OpAccessChain %56 %52 %55
        %461 = OpLoad %10 %460
        %462 = OpFOrdLessThan %17 %461 %44
        %463 = OpLogicalAnd %17 %462 %85
        %464 = OpLogicalNot %17 %463
        %465 = OpLogicalNot %17 %464
               OpBranchConditional %465 %277 %279
        %279 = OpLabel
               OpBranch %275
        %275 = OpLabel
               OpReturn
               OpFunctionEnd

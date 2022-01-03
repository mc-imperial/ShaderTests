; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 436
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %75
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %12 "func0(i1;i1;i1;"
               OpName %9 "from"
               OpName %10 "mid"
               OpName %11 "to"
               OpName %15 "func1("
               OpName %21 "data0"
               OpName %33 "data1"
               OpName %45 "k"
               OpName %48 "buf1"
               OpMemberName %48 0 "_GLF_uniform_int_values"
               OpName %50 ""
               OpName %54 "i"
               OpName %55 "j"
               OpName %75 "_GLF_color"
               OpName %80 "a"
               OpName %99 "S"
               OpMemberName %99 0 "data"
               OpMemberName %99 1 "leftIndex"
               OpMemberName %99 2 "rightIndex"
               OpName %173 "indexable"
               OpName %227 "indexable"
               OpName %231 "i"
               OpName %248 "a"
               OpName %251 "i"
               OpName %259 "j"
               OpName %271 "param"
               OpName %273 "param"
               OpName %275 "param"
               OpName %291 "v"
               OpName %294 "buf0"
               OpMemberName %294 0 "_GLF_uniform_float_values"
               OpName %296 ""
               OpName %302 "buf2"
               OpMemberName %302 0 "two"
               OpName %304 ""
               OpName %354 "ref0"
               OpName %376 "ref1"
               OpName %398 "i"
               OpDecorate %47 ArrayStride 16
               OpMemberDecorate %48 0 Offset 0
               OpDecorate %48 Block
               OpDecorate %50 DescriptorSet 0
               OpDecorate %50 Binding 1
               OpDecorate %75 Location 0
               OpDecorate %293 ArrayStride 16
               OpMemberDecorate %294 0 Offset 0
               OpDecorate %294 Block
               OpDecorate %296 DescriptorSet 0
               OpDecorate %296 Binding 0
               OpMemberDecorate %302 0 Offset 0
               OpDecorate %302 Block
               OpDecorate %304 DescriptorSet 0
               OpDecorate %304 Binding 2
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %2 %7 %7 %7
         %14 = OpTypeFunction %6
         %17 = OpTypeInt 32 0
         %18 = OpConstant %17 10
         %19 = OpTypeArray %6 %18
         %20 = OpTypePointer Private %19
         %21 = OpVariable %20 Private
         %22 = OpConstant %6 0
         %23 = OpConstant %6 1
         %24 = OpConstant %6 2
         %25 = OpConstant %6 3
         %26 = OpConstant %6 4
         %27 = OpConstant %6 5
         %28 = OpConstant %6 6
         %29 = OpConstant %6 7
         %30 = OpConstant %6 8
         %31 = OpConstant %6 9
         %32 = OpConstantComposite %19 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31
         %33 = OpVariable %20 Private
         %34 = OpConstant %6 10
         %35 = OpConstant %6 11
         %36 = OpConstant %6 12
         %37 = OpConstant %6 13
         %38 = OpConstant %6 14
         %39 = OpConstant %6 15
         %40 = OpConstant %6 16
         %41 = OpConstant %6 17
         %42 = OpConstant %6 18
         %43 = OpConstant %6 19
         %44 = OpConstantComposite %19 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43
         %46 = OpConstant %17 17
         %47 = OpTypeArray %6 %46
         %48 = OpTypeStruct %47
         %49 = OpTypePointer Uniform %48
         %50 = OpVariable %49 Uniform
         %51 = OpTypePointer Uniform %6
         %65 = OpTypeBool
         %72 = OpTypeFloat 32
         %73 = OpTypeVector %72 4
         %74 = OpTypePointer Output %73
         %75 = OpVariable %74 Output
         %99 = OpTypeStruct %6 %6 %6
        %164 = OpTypeArray %99 %18
        %172 = OpTypePointer Function %164
        %181 = OpTypePointer Private %6
        %226 = OpTypePointer Function %19
        %289 = OpTypeVector %6 2
        %290 = OpTypePointer Function %289
        %292 = OpConstant %17 1
        %293 = OpTypeArray %72 %292
        %294 = OpTypeStruct %293
        %295 = OpTypePointer Uniform %294
        %296 = OpVariable %295 Uniform
        %297 = OpTypePointer Uniform %72
        %300 = OpTypeVector %72 2
        %302 = OpTypeStruct %72
        %303 = OpTypePointer Uniform %302
        %304 = OpVariable %303 Uniform
        %315 = OpConstant %17 0
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %354 = OpVariable %226 Function
        %376 = OpVariable %226 Function
        %398 = OpVariable %7 Function
               OpStore %21 %32
               OpStore %33 %44
        %331 = OpAccessChain %51 %50 %22 %35
        %332 = OpLoad %6 %331
        %333 = OpConvertSToF %72 %332
        %334 = OpCompositeConstruct %73 %333 %333 %333 %333
               OpStore %75 %334
        %335 = OpFunctionCall %6 %15
        %336 = OpAccessChain %51 %50 %22 %37
        %337 = OpLoad %6 %336
        %338 = OpIEqual %65 %335 %337
               OpSelectionMerge %340 None
               OpBranchConditional %338 %339 %340
        %339 = OpLabel
        %341 = OpAccessChain %51 %50 %22 %23
        %342 = OpLoad %6 %341
        %343 = OpConvertSToF %72 %342
        %344 = OpAccessChain %51 %50 %22 %35
        %345 = OpLoad %6 %344
        %346 = OpConvertSToF %72 %345
        %347 = OpAccessChain %51 %50 %22 %35
        %348 = OpLoad %6 %347
        %349 = OpConvertSToF %72 %348
        %350 = OpAccessChain %51 %50 %22 %23
        %351 = OpLoad %6 %350
        %352 = OpConvertSToF %72 %351
        %353 = OpCompositeConstruct %73 %343 %346 %349 %352
               OpStore %75 %353
               OpBranch %340
        %340 = OpLabel
        %355 = OpAccessChain %51 %50 %22 %35
        %356 = OpLoad %6 %355
        %357 = OpAccessChain %51 %50 %22 %24
        %358 = OpLoad %6 %357
        %359 = OpAccessChain %51 %50 %22 %22
        %360 = OpLoad %6 %359
        %361 = OpAccessChain %51 %50 %22 %25
        %362 = OpLoad %6 %361
        %363 = OpAccessChain %51 %50 %22 %26
        %364 = OpLoad %6 %363
        %365 = OpAccessChain %51 %50 %22 %27
        %366 = OpLoad %6 %365
        %367 = OpAccessChain %51 %50 %22 %28
        %368 = OpLoad %6 %367
        %369 = OpAccessChain %51 %50 %22 %29
        %370 = OpLoad %6 %369
        %371 = OpAccessChain %51 %50 %22 %30
        %372 = OpLoad %6 %371
        %373 = OpAccessChain %51 %50 %22 %31
        %374 = OpLoad %6 %373
        %375 = OpCompositeConstruct %19 %356 %358 %360 %362 %364 %366 %368 %370 %372 %374
               OpStore %354 %375
        %377 = OpAccessChain %51 %50 %22 %34
        %378 = OpLoad %6 %377
        %379 = OpAccessChain %51 %50 %22 %24
        %380 = OpLoad %6 %379
        %381 = OpAccessChain %51 %50 %22 %22
        %382 = OpLoad %6 %381
        %383 = OpAccessChain %51 %50 %22 %25
        %384 = OpLoad %6 %383
        %385 = OpAccessChain %51 %50 %22 %26
        %386 = OpLoad %6 %385
        %387 = OpAccessChain %51 %50 %22 %27
        %388 = OpLoad %6 %387
        %389 = OpAccessChain %51 %50 %22 %28
        %390 = OpLoad %6 %389
        %391 = OpAccessChain %51 %50 %22 %29
        %392 = OpLoad %6 %391
        %393 = OpAccessChain %51 %50 %22 %30
        %394 = OpLoad %6 %393
        %395 = OpAccessChain %51 %50 %22 %31
        %396 = OpLoad %6 %395
        %397 = OpCompositeConstruct %19 %378 %380 %382 %384 %386 %388 %390 %392 %394 %396
               OpStore %376 %397
        %399 = OpAccessChain %51 %50 %22 %35
        %400 = OpLoad %6 %399
               OpStore %398 %400
               OpBranch %401
        %401 = OpLabel
               OpLoopMerge %403 %404 None
               OpBranch %405
        %405 = OpLabel
        %406 = OpLoad %6 %398
        %407 = OpAccessChain %51 %50 %22 %34
        %408 = OpLoad %6 %407
        %409 = OpSLessThan %65 %406 %408
               OpBranchConditional %409 %402 %403
        %402 = OpLabel
        %410 = OpLoad %6 %398
        %411 = OpAccessChain %181 %21 %410
        %412 = OpLoad %6 %411
        %413 = OpLoad %6 %398
        %414 = OpAccessChain %7 %354 %413
        %415 = OpLoad %6 %414
        %416 = OpINotEqual %65 %412 %415
        %417 = OpLogicalNot %65 %416
               OpSelectionMerge %419 None
               OpBranchConditional %417 %418 %419
        %418 = OpLabel
        %420 = OpLoad %6 %398
        %421 = OpAccessChain %181 %33 %420
        %422 = OpLoad %6 %421
        %423 = OpLoad %6 %398
        %424 = OpAccessChain %7 %376 %423
        %425 = OpLoad %6 %424
        %426 = OpINotEqual %65 %422 %425
               OpBranch %419
        %419 = OpLabel
        %427 = OpPhi %65 %416 %402 %426 %418
               OpSelectionMerge %429 None
               OpBranchConditional %427 %428 %429
        %428 = OpLabel
        %430 = OpAccessChain %51 %50 %22 %35
        %431 = OpLoad %6 %430
        %432 = OpConvertSToF %72 %431
        %433 = OpCompositeConstruct %73 %432 %432 %432 %432
               OpStore %75 %433
               OpBranch %429
        %429 = OpLabel
               OpBranch %404
        %404 = OpLabel
        %434 = OpLoad %6 %398
        %435 = OpIAdd %6 %434 %23
               OpStore %398 %435
               OpBranch %401
        %403 = OpLabel
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %2 None %8
          %9 = OpFunctionParameter %7
         %10 = OpFunctionParameter %7
         %11 = OpFunctionParameter %7
         %13 = OpLabel
         %45 = OpVariable %7 Function
         %54 = OpVariable %7 Function
         %55 = OpVariable %7 Function
         %80 = OpVariable %7 Function
        %173 = OpVariable %172 Function
        %227 = OpVariable %226 Function
        %231 = OpVariable %7 Function
         %52 = OpAccessChain %51 %50 %22 %23
         %53 = OpLoad %6 %52
               OpStore %45 %53
               OpStore %54 %23
         %56 = OpAccessChain %51 %50 %22 %23
         %57 = OpLoad %6 %56
               OpStore %55 %57
               OpBranch %58
         %58 = OpLabel
               OpLoopMerge %60 %61 None
               OpBranch %62
         %62 = OpLabel
         %63 = OpLoad %6 %54
         %64 = OpLoad %6 %10
         %66 = OpSLessThanEqual %65 %63 %64
               OpBranchConditional %66 %59 %60
         %59 = OpLabel
         %67 = OpLoad %6 %54
         %68 = OpLoad %6 %55
         %69 = OpSLessThanEqual %65 %67 %68
               OpSelectionMerge %71 None
               OpBranchConditional %69 %70 %176
         %70 = OpLabel
         %76 = OpAccessChain %51 %50 %22 %23
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %72 %77
         %79 = OpCompositeConstruct %73 %78 %78 %78 %78
               OpStore %75 %79
         %81 = OpAccessChain %51 %50 %22 %23
         %82 = OpLoad %6 %81
         %83 = OpSNegate %6 %82
               OpStore %80 %83
               OpBranch %84
         %84 = OpLabel
               OpLoopMerge %86 %87 None
               OpBranch %88
         %88 = OpLabel
         %89 = OpLoad %6 %80
         %90 = OpAccessChain %51 %50 %22 %23
         %91 = OpLoad %6 %90
         %92 = OpINotEqual %65 %89 %91
               OpBranchConditional %92 %85 %86
         %85 = OpLabel
         %93 = OpAccessChain %51 %50 %22 %23
         %94 = OpLoad %6 %93
         %95 = OpAccessChain %51 %50 %22 %24
         %96 = OpLoad %6 %95
         %97 = OpAccessChain %51 %50 %22 %22
         %98 = OpLoad %6 %97
        %100 = OpCompositeConstruct %99 %94 %96 %98
        %101 = OpAccessChain %51 %50 %22 %23
        %102 = OpLoad %6 %101
        %103 = OpAccessChain %51 %50 %22 %24
        %104 = OpLoad %6 %103
        %105 = OpAccessChain %51 %50 %22 %22
        %106 = OpLoad %6 %105
        %107 = OpCompositeConstruct %99 %102 %104 %106
        %108 = OpAccessChain %51 %50 %22 %23
        %109 = OpLoad %6 %108
        %110 = OpAccessChain %51 %50 %22 %24
        %111 = OpLoad %6 %110
        %112 = OpAccessChain %51 %50 %22 %22
        %113 = OpLoad %6 %112
        %114 = OpCompositeConstruct %99 %109 %111 %113
        %115 = OpAccessChain %51 %50 %22 %23
        %116 = OpLoad %6 %115
        %117 = OpAccessChain %51 %50 %22 %24
        %118 = OpLoad %6 %117
        %119 = OpAccessChain %51 %50 %22 %22
        %120 = OpLoad %6 %119
        %121 = OpCompositeConstruct %99 %116 %118 %120
        %122 = OpAccessChain %51 %50 %22 %23
        %123 = OpLoad %6 %122
        %124 = OpAccessChain %51 %50 %22 %24
        %125 = OpLoad %6 %124
        %126 = OpAccessChain %51 %50 %22 %22
        %127 = OpLoad %6 %126
        %128 = OpCompositeConstruct %99 %123 %125 %127
        %129 = OpAccessChain %51 %50 %22 %23
        %130 = OpLoad %6 %129
        %131 = OpAccessChain %51 %50 %22 %24
        %132 = OpLoad %6 %131
        %133 = OpAccessChain %51 %50 %22 %22
        %134 = OpLoad %6 %133
        %135 = OpCompositeConstruct %99 %130 %132 %134
        %136 = OpAccessChain %51 %50 %22 %23
        %137 = OpLoad %6 %136
        %138 = OpAccessChain %51 %50 %22 %24
        %139 = OpLoad %6 %138
        %140 = OpAccessChain %51 %50 %22 %22
        %141 = OpLoad %6 %140
        %142 = OpCompositeConstruct %99 %137 %139 %141
        %143 = OpAccessChain %51 %50 %22 %23
        %144 = OpLoad %6 %143
        %145 = OpAccessChain %51 %50 %22 %24
        %146 = OpLoad %6 %145
        %147 = OpAccessChain %51 %50 %22 %22
        %148 = OpLoad %6 %147
        %149 = OpCompositeConstruct %99 %144 %146 %148
        %150 = OpAccessChain %51 %50 %22 %23
        %151 = OpLoad %6 %150
        %152 = OpAccessChain %51 %50 %22 %24
        %153 = OpLoad %6 %152
        %154 = OpAccessChain %51 %50 %22 %22
        %155 = OpLoad %6 %154
        %156 = OpCompositeConstruct %99 %151 %153 %155
        %157 = OpAccessChain %51 %50 %22 %23
        %158 = OpLoad %6 %157
        %159 = OpAccessChain %51 %50 %22 %24
        %160 = OpLoad %6 %159
        %161 = OpAccessChain %51 %50 %22 %22
        %162 = OpLoad %6 %161
        %163 = OpCompositeConstruct %99 %158 %160 %162
        %165 = OpCompositeConstruct %164 %100 %107 %114 %121 %128 %135 %142 %149 %156 %163
        %166 = OpLoad %6 %80
        %167 = OpAccessChain %51 %50 %22 %35
        %168 = OpLoad %6 %167
        %169 = OpAccessChain %51 %50 %22 %36
        %170 = OpLoad %6 %169
        %171 = OpExtInst %6 %1 SClamp %166 %168 %170
               OpStore %173 %165
        %174 = OpAccessChain %7 %173 %171 %22
        %175 = OpLoad %6 %174
               OpStore %80 %175
               OpBranch %87
         %87 = OpLabel
               OpBranch %84
         %86 = OpLabel
               OpBranch %71
        %176 = OpLabel
        %177 = OpLoad %6 %45
        %178 = OpIAdd %6 %177 %23
               OpStore %45 %178
        %179 = OpLoad %6 %55
        %180 = OpIAdd %6 %179 %23
               OpStore %55 %180
        %182 = OpAccessChain %181 %21 %179
        %183 = OpLoad %6 %182
        %184 = OpAccessChain %181 %33 %177
               OpStore %184 %183
               OpBranch %71
         %71 = OpLabel
        %185 = OpLoad %6 %54
        %186 = OpIAdd %6 %185 %23
               OpStore %54 %186
               OpBranch %61
         %61 = OpLabel
               OpBranch %58
         %60 = OpLabel
               OpBranch %187
        %187 = OpLabel
               OpLoopMerge %189 %190 None
               OpBranch %191
        %191 = OpLabel
        %192 = OpLoad %6 %54
        %193 = OpSLessThan %65 %192 %27
               OpSelectionMerge %195 None
               OpBranchConditional %193 %194 %195
        %194 = OpLabel
        %196 = OpLoad %6 %45
        %197 = OpAccessChain %51 %50 %22 %34
        %198 = OpLoad %6 %197
        %199 = OpSLessThan %65 %196 %198
               OpBranch %195
        %195 = OpLabel
        %200 = OpPhi %65 %193 %191 %199 %194
               OpBranchConditional %200 %188 %189
        %188 = OpLabel
        %201 = OpLoad %6 %45
        %202 = OpIAdd %6 %201 %23
               OpStore %45 %202
        %203 = OpAccessChain %51 %50 %22 %35
        %204 = OpLoad %6 %203
        %205 = OpAccessChain %51 %50 %22 %23
        %206 = OpLoad %6 %205
        %207 = OpAccessChain %51 %50 %22 %24
        %208 = OpLoad %6 %207
        %209 = OpAccessChain %51 %50 %22 %22
        %210 = OpLoad %6 %209
        %211 = OpAccessChain %51 %50 %22 %25
        %212 = OpLoad %6 %211
        %213 = OpAccessChain %51 %50 %22 %37
        %214 = OpLoad %6 %213
        %215 = OpAccessChain %51 %50 %22 %38
        %216 = OpLoad %6 %215
        %217 = OpAccessChain %51 %50 %22 %39
        %218 = OpLoad %6 %217
        %219 = OpAccessChain %51 %50 %22 %40
        %220 = OpLoad %6 %219
        %221 = OpAccessChain %51 %50 %22 %36
        %222 = OpLoad %6 %221
        %223 = OpCompositeConstruct %19 %204 %206 %208 %210 %212 %214 %216 %218 %220 %222
        %224 = OpLoad %6 %54
        %225 = OpIAdd %6 %224 %23
               OpStore %54 %225
               OpStore %227 %223
        %228 = OpAccessChain %7 %227 %224
        %229 = OpLoad %6 %228
        %230 = OpAccessChain %181 %33 %201
               OpStore %230 %229
               OpBranch %190
        %190 = OpLabel
               OpBranch %187
        %189 = OpLabel
        %232 = OpLoad %6 %9
               OpStore %231 %232
               OpBranch %233
        %233 = OpLabel
               OpLoopMerge %235 %236 None
               OpBranch %237
        %237 = OpLabel
        %238 = OpLoad %6 %231
        %239 = OpLoad %6 %11
        %240 = OpSLessThanEqual %65 %238 %239
               OpBranchConditional %240 %234 %235
        %234 = OpLabel
        %241 = OpLoad %6 %231
        %242 = OpLoad %6 %231
        %243 = OpAccessChain %181 %33 %242
        %244 = OpLoad %6 %243
        %245 = OpAccessChain %181 %21 %241
               OpStore %245 %244
               OpBranch %236
        %236 = OpLabel
        %246 = OpLoad %6 %231
        %247 = OpIAdd %6 %246 %23
               OpStore %231 %247
               OpBranch %233
        %235 = OpLabel
               OpReturn
               OpFunctionEnd
         %15 = OpFunction %6 None %14
         %16 = OpLabel
        %248 = OpVariable %7 Function
        %251 = OpVariable %7 Function
        %259 = OpVariable %7 Function
        %271 = OpVariable %7 Function
        %273 = OpVariable %7 Function
        %275 = OpVariable %7 Function
        %291 = OpVariable %290 Function
        %249 = OpAccessChain %51 %50 %22 %23
        %250 = OpLoad %6 %249
               OpStore %248 %250
               OpStore %251 %23
               OpBranch %252
        %252 = OpLabel
               OpLoopMerge %254 %255 None
               OpBranch %256
        %256 = OpLabel
        %257 = OpLoad %6 %251
        %258 = OpSLessThan %65 %257 %34
               OpBranchConditional %258 %253 %254
        %253 = OpLabel
               OpStore %259 %23
               OpBranch %260
        %260 = OpLabel
               OpLoopMerge %262 %263 None
               OpBranch %264
        %264 = OpLabel
        %265 = OpLoad %6 %259
        %266 = OpSLessThan %65 %265 %34
               OpBranchConditional %266 %261 %262
        %261 = OpLabel
        %267 = OpLoad %6 %251
        %268 = OpLoad %6 %259
        %269 = OpIAdd %6 %267 %268
        %270 = OpExtInst %6 %1 SMin %269 %34
        %272 = OpLoad %6 %251
               OpStore %271 %272
        %274 = OpLoad %6 %259
               OpStore %273 %274
               OpStore %275 %270
        %276 = OpFunctionCall %2 %12 %271 %273 %275
               OpBranch %263
        %263 = OpLabel
        %277 = OpLoad %6 %251
        %278 = OpLoad %6 %259
        %279 = OpIAdd %6 %278 %277
               OpStore %259 %279
               OpBranch %260
        %262 = OpLabel
               OpBranch %280
        %280 = OpLabel
               OpLoopMerge %282 %283 None
               OpBranch %284
        %284 = OpLabel
        %285 = OpLoad %6 %248
        %286 = OpAccessChain %51 %50 %22 %37
        %287 = OpLoad %6 %286
        %288 = OpSLessThan %65 %285 %287
               OpBranchConditional %288 %281 %282
        %281 = OpLabel
        %298 = OpAccessChain %297 %296 %22 %22
        %299 = OpLoad %72 %298
        %301 = OpCompositeConstruct %300 %299 %299
        %305 = OpAccessChain %297 %304 %22
        %306 = OpLoad %72 %305
        %307 = OpCompositeConstruct %300 %306 %306
        %308 = OpFDiv %300 %301 %307
        %309 = OpConvertFToS %289 %308
               OpStore %291 %309
               OpBranch %310
        %310 = OpLabel
               OpLoopMerge %312 %313 None
               OpBranch %314
        %314 = OpLabel
        %316 = OpAccessChain %7 %291 %315
        %317 = OpLoad %6 %316
        %318 = OpAccessChain %7 %291 %292
        %319 = OpLoad %6 %318
        %320 = OpIAdd %6 %317 %319
        %321 = OpAccessChain %51 %50 %22 %24
        %322 = OpLoad %6 %321
        %323 = OpSGreaterThan %65 %320 %322
               OpBranchConditional %323 %311 %312
        %311 = OpLabel
               OpBranch %313
        %313 = OpLabel
               OpBranch %310
        %312 = OpLabel
        %324 = OpLoad %6 %248
        %325 = OpIAdd %6 %324 %23
               OpStore %248 %325
               OpBranch %283
        %283 = OpLabel
               OpBranch %280
        %282 = OpLabel
               OpBranch %255
        %255 = OpLabel
        %326 = OpLoad %6 %251
        %327 = OpIMul %6 %326 %24
               OpStore %251 %327
               OpBranch %252
        %254 = OpLabel
        %328 = OpLoad %6 %248
               OpReturnValue %328
               OpFunctionEnd

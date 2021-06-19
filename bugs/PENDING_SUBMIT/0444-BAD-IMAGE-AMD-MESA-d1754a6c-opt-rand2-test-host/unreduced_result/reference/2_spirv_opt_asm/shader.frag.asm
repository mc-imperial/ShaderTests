; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 620
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %12 %435
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "pos"
               OpName %12 "gl_FragCoord"
               OpName %15 "buf0"
               OpMemberName %15 0 "resolution"
               OpName %17 ""
               OpName %26 "ipos"
               OpName %42 "i"
               OpName %55 "map"
               OpName %62 "p"
               OpName %65 "canwalk"
               OpName %67 "v"
               OpName %74 "directions"
               OpName %171 "j"
               OpName %208 "d"
               OpName %435 "_GLF_color"
               OpDecorate %12 BuiltIn FragCoord
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %435 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeVector %6 4
         %11 = OpTypePointer Input %10
         %12 = OpVariable %11 Input
         %15 = OpTypeStruct %7
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypeInt 32 1
         %19 = OpConstant %18 0
         %20 = OpTypePointer Uniform %7
         %24 = OpTypeVector %18 2
         %25 = OpTypePointer Function %24
         %27 = OpTypeInt 32 0
         %28 = OpConstant %27 0
         %29 = OpTypePointer Function %6
         %32 = OpConstant %6 16
         %35 = OpConstant %27 1
         %41 = OpTypePointer Function %18
         %49 = OpConstant %18 256
         %50 = OpTypeBool
         %52 = OpConstant %27 256
         %53 = OpTypeArray %18 %52
         %54 = OpTypePointer Private %53
         %57 = OpTypePointer Private %18
         %60 = OpConstant %18 1
         %63 = OpConstantComposite %24 %19 %19
         %64 = OpTypePointer Function %50
         %66 = OpConstantTrue %50
         %82 = OpConstant %18 2
         %86 = OpConstant %18 16
        %119 = OpConstant %18 14
        %162 = OpConstantFalse %50
        %169 = OpConstant %18 8
        %434 = OpTypePointer Output %10
        %435 = OpVariable %434 Output
        %436 = OpConstant %6 1
        %437 = OpConstantComposite %10 %436 %436 %436 %436
        %440 = OpConstant %6 0
        %441 = OpConstantComposite %10 %440 %440 %440 %436
        %442 = OpTypePointer Function %53
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %445 = OpVariable %64 Function %162
         %55 = OpVariable %442 Function
          %9 = OpVariable %8 Function
         %26 = OpVariable %25 Function
         %42 = OpVariable %41 Function
         %62 = OpVariable %25 Function
         %65 = OpVariable %64 Function
         %67 = OpVariable %41 Function
         %74 = OpVariable %41 Function
        %171 = OpVariable %41 Function
        %208 = OpVariable %41 Function
               OpSelectionMerge %443 None
               OpSwitch %28 %444
        %444 = OpLabel
         %13 = OpLoad %10 %12
         %14 = OpVectorShuffle %7 %13 %13 0 1
         %21 = OpAccessChain %20 %17 %19
         %22 = OpLoad %7 %21
         %23 = OpFDiv %7 %14 %22
               OpStore %9 %23
         %30 = OpAccessChain %29 %9 %28
        %550 = OpLoad %7 %9
         %31 = OpCompositeExtract %6 %550 0
         %33 = OpFMul %6 %31 %32
         %34 = OpConvertFToS %18 %33
         %36 = OpAccessChain %29 %9 %35
        %551 = OpLoad %7 %9
         %37 = OpCompositeExtract %6 %551 1
         %38 = OpFMul %6 %37 %32
         %39 = OpConvertFToS %18 %38
         %40 = OpCompositeConstruct %24 %34 %39
               OpStore %26 %40
               OpStore %42 %19
               OpBranch %43
         %43 = OpLabel
        %448 = OpPhi %18 %19 %444 %61 %44
         %51 = OpSLessThan %50 %448 %49
               OpLoopMerge %45 %44 None
               OpBranchConditional %51 %44 %45
         %44 = OpLabel
         %58 = OpAccessChain %41 %55 %448
               OpStore %58 %19
         %61 = OpIAdd %18 %448 %60
               OpStore %42 %61
               OpBranch %43
         %45 = OpLabel
               OpStore %62 %63
               OpStore %65 %66
               OpStore %67 %19
               OpBranch %68
         %68 = OpLabel
        %500 = OpPhi %50 %66 %45 %478 %71
        %449 = OpPhi %18 %19 %45 %529 %71
        %512 = OpPhi %50 %162 %45 %502 %71
               OpLoopMerge %70 %71 None
               OpBranch %69
         %69 = OpLabel
         %73 = OpIAdd %18 %449 %60
               OpStore %67 %73
               OpStore %74 %19
         %75 = OpAccessChain %41 %62 %28
        %552 = OpLoad %24 %62
         %76 = OpCompositeExtract %18 %552 0
         %77 = OpSGreaterThan %50 %76 %19
               OpSelectionMerge %79 None
               OpBranchConditional %77 %78 %79
         %78 = OpLabel
        %553 = OpLoad %24 %62
         %81 = OpCompositeExtract %18 %553 0
         %83 = OpISub %18 %81 %82
         %84 = OpAccessChain %41 %62 %35
        %554 = OpLoad %24 %62
         %85 = OpCompositeExtract %18 %554 1
         %87 = OpIMul %18 %85 %86
         %88 = OpIAdd %18 %83 %87
         %89 = OpAccessChain %41 %55 %88
         %90 = OpLoad %18 %89
         %91 = OpIEqual %50 %90 %19
               OpBranch %79
         %79 = OpLabel
         %92 = OpPhi %50 %77 %69 %91 %78
               OpSelectionMerge %94 None
               OpBranchConditional %92 %93 %94
         %93 = OpLabel
         %96 = OpIAdd %18 %19 %60
               OpStore %74 %96
               OpBranch %94
         %94 = OpLabel
        %452 = OpPhi %18 %19 %79 %96 %93
        %555 = OpLoad %24 %62
         %98 = OpCompositeExtract %18 %555 1
         %99 = OpSGreaterThan %50 %98 %19
               OpSelectionMerge %101 None
               OpBranchConditional %99 %100 %101
        %100 = OpLabel
        %556 = OpLoad %24 %62
        %103 = OpCompositeExtract %18 %556 0
        %557 = OpLoad %24 %62
        %105 = OpCompositeExtract %18 %557 1
        %106 = OpISub %18 %105 %82
        %107 = OpIMul %18 %106 %86
        %108 = OpIAdd %18 %103 %107
        %109 = OpAccessChain %41 %55 %108
        %110 = OpLoad %18 %109
        %111 = OpIEqual %50 %110 %19
               OpBranch %101
        %101 = OpLabel
        %112 = OpPhi %50 %99 %94 %111 %100
               OpSelectionMerge %114 None
               OpBranchConditional %112 %113 %114
        %113 = OpLabel
        %116 = OpIAdd %18 %452 %60
               OpStore %74 %116
               OpBranch %114
        %114 = OpLabel
        %454 = OpPhi %18 %452 %101 %116 %113
        %558 = OpLoad %24 %62
        %118 = OpCompositeExtract %18 %558 0
        %120 = OpSLessThan %50 %118 %119
               OpSelectionMerge %122 None
               OpBranchConditional %120 %121 %122
        %121 = OpLabel
        %559 = OpLoad %24 %62
        %124 = OpCompositeExtract %18 %559 0
        %125 = OpIAdd %18 %124 %82
        %560 = OpLoad %24 %62
        %127 = OpCompositeExtract %18 %560 1
        %128 = OpIMul %18 %127 %86
        %129 = OpIAdd %18 %125 %128
        %130 = OpAccessChain %41 %55 %129
        %131 = OpLoad %18 %130
        %132 = OpIEqual %50 %131 %19
               OpBranch %122
        %122 = OpLabel
        %133 = OpPhi %50 %120 %114 %132 %121
               OpSelectionMerge %135 None
               OpBranchConditional %133 %134 %135
        %134 = OpLabel
        %137 = OpIAdd %18 %454 %60
               OpStore %74 %137
               OpBranch %135
        %135 = OpLabel
        %456 = OpPhi %18 %454 %122 %137 %134
        %561 = OpLoad %24 %62
        %139 = OpCompositeExtract %18 %561 1
        %140 = OpSLessThan %50 %139 %119
               OpSelectionMerge %142 None
               OpBranchConditional %140 %141 %142
        %141 = OpLabel
        %562 = OpLoad %24 %62
        %144 = OpCompositeExtract %18 %562 0
        %563 = OpLoad %24 %62
        %146 = OpCompositeExtract %18 %563 1
        %147 = OpIAdd %18 %146 %82
        %148 = OpIMul %18 %147 %86
        %149 = OpIAdd %18 %144 %148
        %150 = OpAccessChain %41 %55 %149
        %151 = OpLoad %18 %150
        %152 = OpIEqual %50 %151 %19
               OpBranch %142
        %142 = OpLabel
        %153 = OpPhi %50 %140 %135 %152 %141
               OpSelectionMerge %155 None
               OpBranchConditional %153 %154 %155
        %154 = OpLabel
        %157 = OpIAdd %18 %456 %60
               OpStore %74 %157
               OpBranch %155
        %155 = OpLabel
        %457 = OpPhi %18 %456 %142 %157 %154
        %159 = OpIEqual %50 %457 %19
               OpSelectionMerge %161 None
               OpBranchConditional %159 %160 %207
        %160 = OpLabel
               OpStore %65 %162
               OpStore %42 %19
               OpBranch %163
        %163 = OpLabel
        %479 = OpPhi %50 %162 %160 %545 %166
        %477 = OpPhi %18 %19 %160 %199 %166
        %170 = OpSLessThan %50 %477 %169
               OpLoopMerge %165 %166 None
               OpBranchConditional %170 %164 %165
        %164 = OpLabel
               OpStore %171 %19
               OpBranch %172
        %172 = OpLabel
        %526 = OpPhi %18 %19 %164 %197 %175
        %545 = OpPhi %50 %479 %164 %546 %175
        %178 = OpSLessThan %50 %526 %169
               OpLoopMerge %174 %175 None
               OpBranchConditional %178 %173 %174
        %173 = OpLabel
        %180 = OpIMul %18 %526 %82
        %182 = OpIMul %18 %477 %82
        %183 = OpIMul %18 %182 %86
        %184 = OpIAdd %18 %180 %183
        %185 = OpAccessChain %41 %55 %184
        %186 = OpLoad %18 %185
        %187 = OpIEqual %50 %186 %19
               OpSelectionMerge %189 None
               OpBranchConditional %187 %188 %189
        %188 = OpLabel
        %191 = OpIMul %18 %526 %82
        %564 = OpLoad %24 %62
        %565 = OpCompositeInsert %24 %191 %564 0
               OpStore %62 %565
        %194 = OpIMul %18 %477 %82
        %566 = OpLoad %24 %62
        %567 = OpCompositeInsert %24 %194 %566 1
               OpStore %62 %567
               OpStore %65 %66
               OpBranch %189
        %189 = OpLabel
        %546 = OpPhi %50 %545 %173 %66 %188
               OpBranch %175
        %175 = OpLabel
        %197 = OpIAdd %18 %526 %60
               OpStore %171 %197
               OpBranch %172
        %174 = OpLabel
               OpBranch %166
        %166 = OpLabel
        %199 = OpIAdd %18 %477 %60
               OpStore %42 %199
               OpBranch %163
        %165 = OpLabel
        %568 = OpLoad %24 %62
        %201 = OpCompositeExtract %18 %568 0
        %569 = OpLoad %24 %62
        %203 = OpCompositeExtract %18 %569 1
        %204 = OpIMul %18 %203 %86
        %205 = OpIAdd %18 %201 %204
        %206 = OpAccessChain %41 %55 %205
               OpStore %206 %60
               OpBranch %161
        %207 = OpLabel
        %211 = OpSMod %18 %73 %457
               OpStore %208 %211
        %214 = OpIAdd %18 %73 %457
               OpStore %67 %214
        %216 = OpSGreaterThanEqual %50 %211 %19
               OpSelectionMerge %218 None
               OpBranchConditional %216 %217 %218
        %217 = OpLabel
        %570 = OpLoad %24 %62
        %220 = OpCompositeExtract %18 %570 0
        %221 = OpSGreaterThan %50 %220 %19
               OpBranch %218
        %218 = OpLabel
        %222 = OpPhi %50 %216 %207 %221 %217
               OpSelectionMerge %224 None
               OpBranchConditional %222 %223 %224
        %223 = OpLabel
        %571 = OpLoad %24 %62
        %226 = OpCompositeExtract %18 %571 0
        %227 = OpISub %18 %226 %82
        %572 = OpLoad %24 %62
        %229 = OpCompositeExtract %18 %572 1
        %230 = OpIMul %18 %229 %86
        %231 = OpIAdd %18 %227 %230
        %232 = OpAccessChain %41 %55 %231
        %233 = OpLoad %18 %232
        %234 = OpIEqual %50 %233 %19
               OpBranch %224
        %224 = OpLabel
        %235 = OpPhi %50 %222 %218 %234 %223
               OpSelectionMerge %237 None
               OpBranchConditional %235 %236 %237
        %236 = OpLabel
        %239 = OpISub %18 %211 %60
               OpStore %208 %239
        %573 = OpLoad %24 %62
        %241 = OpCompositeExtract %18 %573 0
        %574 = OpLoad %24 %62
        %243 = OpCompositeExtract %18 %574 1
        %244 = OpIMul %18 %243 %86
        %245 = OpIAdd %18 %241 %244
        %246 = OpAccessChain %41 %55 %245
               OpStore %246 %60
        %575 = OpLoad %24 %62
        %248 = OpCompositeExtract %18 %575 0
        %249 = OpISub %18 %248 %60
        %576 = OpLoad %24 %62
        %251 = OpCompositeExtract %18 %576 1
        %252 = OpIMul %18 %251 %86
        %253 = OpIAdd %18 %249 %252
        %254 = OpAccessChain %41 %55 %253
               OpStore %254 %60
        %577 = OpLoad %24 %62
        %256 = OpCompositeExtract %18 %577 0
        %257 = OpISub %18 %256 %82
        %578 = OpLoad %24 %62
        %259 = OpCompositeExtract %18 %578 1
        %260 = OpIMul %18 %259 %86
        %261 = OpIAdd %18 %257 %260
        %262 = OpAccessChain %41 %55 %261
               OpStore %262 %60
        %579 = OpLoad %24 %62
        %264 = OpCompositeExtract %18 %579 0
        %265 = OpISub %18 %264 %82
        %580 = OpLoad %24 %62
        %581 = OpCompositeInsert %24 %265 %580 0
               OpStore %62 %581
               OpBranch %237
        %237 = OpLabel
        %468 = OpPhi %18 %211 %224 %239 %236
        %268 = OpSGreaterThanEqual %50 %468 %19
               OpSelectionMerge %270 None
               OpBranchConditional %268 %269 %270
        %269 = OpLabel
        %582 = OpLoad %24 %62
        %272 = OpCompositeExtract %18 %582 1
        %273 = OpSGreaterThan %50 %272 %19
               OpBranch %270
        %270 = OpLabel
        %274 = OpPhi %50 %268 %237 %273 %269
               OpSelectionMerge %276 None
               OpBranchConditional %274 %275 %276
        %275 = OpLabel
        %583 = OpLoad %24 %62
        %278 = OpCompositeExtract %18 %583 0
        %584 = OpLoad %24 %62
        %280 = OpCompositeExtract %18 %584 1
        %281 = OpISub %18 %280 %82
        %282 = OpIMul %18 %281 %86
        %283 = OpIAdd %18 %278 %282
        %284 = OpAccessChain %41 %55 %283
        %285 = OpLoad %18 %284
        %286 = OpIEqual %50 %285 %19
               OpBranch %276
        %276 = OpLabel
        %287 = OpPhi %50 %274 %270 %286 %275
               OpSelectionMerge %289 None
               OpBranchConditional %287 %288 %289
        %288 = OpLabel
        %291 = OpISub %18 %468 %60
               OpStore %208 %291
        %585 = OpLoad %24 %62
        %293 = OpCompositeExtract %18 %585 0
        %586 = OpLoad %24 %62
        %295 = OpCompositeExtract %18 %586 1
        %296 = OpIMul %18 %295 %86
        %297 = OpIAdd %18 %293 %296
        %298 = OpAccessChain %41 %55 %297
               OpStore %298 %60
        %587 = OpLoad %24 %62
        %300 = OpCompositeExtract %18 %587 0
        %588 = OpLoad %24 %62
        %302 = OpCompositeExtract %18 %588 1
        %303 = OpISub %18 %302 %60
        %304 = OpIMul %18 %303 %86
        %305 = OpIAdd %18 %300 %304
        %306 = OpAccessChain %41 %55 %305
               OpStore %306 %60
        %589 = OpLoad %24 %62
        %308 = OpCompositeExtract %18 %589 0
        %590 = OpLoad %24 %62
        %310 = OpCompositeExtract %18 %590 1
        %311 = OpISub %18 %310 %82
        %312 = OpIMul %18 %311 %86
        %313 = OpIAdd %18 %308 %312
        %314 = OpAccessChain %41 %55 %313
               OpStore %314 %60
        %591 = OpLoad %24 %62
        %316 = OpCompositeExtract %18 %591 1
        %317 = OpISub %18 %316 %82
        %592 = OpLoad %24 %62
        %593 = OpCompositeInsert %24 %317 %592 1
               OpStore %62 %593
               OpBranch %289
        %289 = OpLabel
        %471 = OpPhi %18 %468 %276 %291 %288
        %320 = OpSGreaterThanEqual %50 %471 %19
               OpSelectionMerge %322 None
               OpBranchConditional %320 %321 %322
        %321 = OpLabel
        %594 = OpLoad %24 %62
        %324 = OpCompositeExtract %18 %594 0
        %325 = OpSLessThan %50 %324 %119
               OpBranch %322
        %322 = OpLabel
        %326 = OpPhi %50 %320 %289 %325 %321
               OpSelectionMerge %328 None
               OpBranchConditional %326 %327 %328
        %327 = OpLabel
        %595 = OpLoad %24 %62
        %330 = OpCompositeExtract %18 %595 0
        %331 = OpIAdd %18 %330 %82
        %596 = OpLoad %24 %62
        %333 = OpCompositeExtract %18 %596 1
        %334 = OpIMul %18 %333 %86
        %335 = OpIAdd %18 %331 %334
        %336 = OpAccessChain %41 %55 %335
        %337 = OpLoad %18 %336
        %338 = OpIEqual %50 %337 %19
               OpBranch %328
        %328 = OpLabel
        %339 = OpPhi %50 %326 %322 %338 %327
               OpSelectionMerge %341 None
               OpBranchConditional %339 %340 %341
        %340 = OpLabel
        %343 = OpISub %18 %471 %60
               OpStore %208 %343
        %597 = OpLoad %24 %62
        %345 = OpCompositeExtract %18 %597 0
        %598 = OpLoad %24 %62
        %347 = OpCompositeExtract %18 %598 1
        %348 = OpIMul %18 %347 %86
        %349 = OpIAdd %18 %345 %348
        %350 = OpAccessChain %41 %55 %349
               OpStore %350 %60
        %599 = OpLoad %24 %62
        %352 = OpCompositeExtract %18 %599 0
        %353 = OpIAdd %18 %352 %60
        %600 = OpLoad %24 %62
        %355 = OpCompositeExtract %18 %600 1
        %356 = OpIMul %18 %355 %86
        %357 = OpIAdd %18 %353 %356
        %358 = OpAccessChain %41 %55 %357
               OpStore %358 %60
        %601 = OpLoad %24 %62
        %360 = OpCompositeExtract %18 %601 0
        %361 = OpIAdd %18 %360 %82
        %602 = OpLoad %24 %62
        %363 = OpCompositeExtract %18 %602 1
        %364 = OpIMul %18 %363 %86
        %365 = OpIAdd %18 %361 %364
        %366 = OpAccessChain %41 %55 %365
               OpStore %366 %60
        %603 = OpLoad %24 %62
        %368 = OpCompositeExtract %18 %603 0
        %369 = OpIAdd %18 %368 %82
        %604 = OpLoad %24 %62
        %605 = OpCompositeInsert %24 %369 %604 0
               OpStore %62 %605
               OpBranch %341
        %341 = OpLabel
        %474 = OpPhi %18 %471 %328 %343 %340
        %372 = OpSGreaterThanEqual %50 %474 %19
               OpSelectionMerge %374 None
               OpBranchConditional %372 %373 %374
        %373 = OpLabel
        %606 = OpLoad %24 %62
        %376 = OpCompositeExtract %18 %606 1
        %377 = OpSLessThan %50 %376 %119
               OpBranch %374
        %374 = OpLabel
        %378 = OpPhi %50 %372 %341 %377 %373
               OpSelectionMerge %380 None
               OpBranchConditional %378 %379 %380
        %379 = OpLabel
        %607 = OpLoad %24 %62
        %382 = OpCompositeExtract %18 %607 0
        %608 = OpLoad %24 %62
        %384 = OpCompositeExtract %18 %608 1
        %385 = OpIAdd %18 %384 %82
        %386 = OpIMul %18 %385 %86
        %387 = OpIAdd %18 %382 %386
        %388 = OpAccessChain %41 %55 %387
        %389 = OpLoad %18 %388
        %390 = OpIEqual %50 %389 %19
               OpBranch %380
        %380 = OpLabel
        %391 = OpPhi %50 %378 %374 %390 %379
               OpSelectionMerge %393 None
               OpBranchConditional %391 %392 %393
        %392 = OpLabel
        %395 = OpISub %18 %474 %60
               OpStore %208 %395
        %609 = OpLoad %24 %62
        %397 = OpCompositeExtract %18 %609 0
        %610 = OpLoad %24 %62
        %399 = OpCompositeExtract %18 %610 1
        %400 = OpIMul %18 %399 %86
        %401 = OpIAdd %18 %397 %400
        %402 = OpAccessChain %41 %55 %401
               OpStore %402 %60
        %611 = OpLoad %24 %62
        %404 = OpCompositeExtract %18 %611 0
        %612 = OpLoad %24 %62
        %406 = OpCompositeExtract %18 %612 1
        %407 = OpIAdd %18 %406 %60
        %408 = OpIMul %18 %407 %86
        %409 = OpIAdd %18 %404 %408
        %410 = OpAccessChain %41 %55 %409
               OpStore %410 %60
        %613 = OpLoad %24 %62
        %412 = OpCompositeExtract %18 %613 0
        %614 = OpLoad %24 %62
        %414 = OpCompositeExtract %18 %614 1
        %415 = OpIAdd %18 %414 %82
        %416 = OpIMul %18 %415 %86
        %417 = OpIAdd %18 %412 %416
        %418 = OpAccessChain %41 %55 %417
               OpStore %418 %60
        %615 = OpLoad %24 %62
        %420 = OpCompositeExtract %18 %615 1
        %421 = OpIAdd %18 %420 %82
        %616 = OpLoad %24 %62
        %617 = OpCompositeInsert %24 %421 %616 1
               OpStore %62 %617
               OpBranch %393
        %393 = OpLabel
               OpBranch %161
        %161 = OpLabel
        %529 = OpPhi %18 %73 %165 %214 %393
        %502 = OpPhi %50 %512 %165 %512 %393
        %478 = OpPhi %50 %479 %165 %500 %393
        %423 = OpAccessChain %41 %26 %35
        %618 = OpLoad %24 %26
        %424 = OpCompositeExtract %18 %618 1
        %425 = OpIMul %18 %424 %86
        %426 = OpAccessChain %41 %26 %28
        %619 = OpLoad %24 %26
        %427 = OpCompositeExtract %18 %619 0
        %428 = OpIAdd %18 %425 %427
        %429 = OpAccessChain %41 %55 %428
        %430 = OpLoad %18 %429
        %431 = OpIEqual %50 %430 %60
               OpSelectionMerge %433 None
               OpBranchConditional %431 %432 %433
        %432 = OpLabel
               OpStore %435 %437
               OpStore %445 %66
               OpBranch %70
        %433 = OpLabel
               OpBranch %71
         %71 = OpLabel
               OpBranchConditional %478 %68 %70
         %70 = OpLabel
        %501 = OpPhi %50 %66 %432 %502 %71
               OpSelectionMerge %446 None
               OpBranchConditional %501 %443 %446
        %446 = OpLabel
               OpStore %435 %441
               OpStore %445 %66
               OpBranch %443
        %443 = OpLabel
               OpReturn
               OpFunctionEnd

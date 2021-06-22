; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 543
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %113 %150
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %113 "gl_FragCoord"
               OpName %150 "_GLF_color"
               OpName %154 "tex"
               OpDecorate %113 BuiltIn FragCoord
               OpDecorate %150 Location 0
               OpDecorate %154 RelaxedPrecision
               OpDecorate %154 DescriptorSet 0
               OpDecorate %154 Binding 0
               OpDecorate %155 RelaxedPrecision
               OpDecorate %157 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
         %19 = OpConstant %6 0.318309873
         %22 = OpConstant %6 0.00100000005
         %23 = OpTypeBool
         %27 = OpConstant %6 0
         %32 = OpTypeInt 32 0
         %36 = OpConstant %32 0
         %55 = OpConstant %6 0.970000029
         %56 = OpConstant %6 0.189999998
         %73 = OpConstant %6 0.5
         %81 = OpConstant %6 1
         %96 = OpConstantComposite %7 %73 %73
        %111 = OpTypeVector %6 4
        %112 = OpTypePointer Input %111
        %113 = OpVariable %112 Input
        %116 = OpConstant %6 0.00390625
        %144 = OpConstant %6 256
        %149 = OpTypePointer Output %111
        %150 = OpVariable %149 Output
        %151 = OpTypeImage %6 2D 0 0 0 1 Unknown
        %152 = OpTypeSampledImage %151
        %153 = OpTypePointer UniformConstant %152
        %154 = OpVariable %153 UniformConstant
        %158 = OpTypeVector %6 3
        %536 = OpConstant %6 -0.421875
        %537 = OpConstant %6 -0.8125
        %538 = OpConstantComposite %7 %536 %537
        %539 = OpConstant %6 -0.734375
        %540 = OpConstant %6 -0.34375
        %541 = OpConstantComposite %7 %539 %540
        %542 = OpConstantComposite %7 %116 %116
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %114 = OpLoad %111 %113
        %115 = OpVectorShuffle %7 %114 %114 0 1
        %117 = OpVectorTimesScalar %7 %115 %116
        %235 = OpFAdd %7 %117 %538
        %237 = OpExtInst %6 %1 Length %235
               OpSelectionMerge %310 None
               OpSwitch %36 %251
        %251 = OpLabel
        %254 = OpFOrdLessThan %23 %237 %22
               OpSelectionMerge %256 None
               OpBranchConditional %254 %255 %256
        %255 = OpLabel
               OpBranch %310
        %256 = OpLabel
        %258 = OpExtInst %7 %1 FAbs %235
        %260 = OpCompositeExtract %6 %258 1
        %262 = OpCompositeExtract %6 %258 0
        %263 = OpFOrdGreaterThan %23 %260 %262
               OpSelectionMerge %276 None
               OpBranchConditional %263 %264 %270
        %264 = OpLabel
        %269 = OpFDiv %6 %262 %260
               OpBranch %276
        %270 = OpLabel
        %275 = OpFDiv %6 %260 %262
               OpBranch %276
        %276 = OpLabel
        %510 = OpPhi %6 %269 %264 %275 %270
        %278 = OpFMul %6 %56 %510
        %280 = OpFMul %6 %278 %510
        %281 = OpFSub %6 %55 %280
        %283 = OpFMul %6 %281 %510
        %285 = OpFMul %6 %283 %19
        %290 = OpFOrdLessThan %23 %260 %262
               OpSelectionMerge %294 None
               OpBranchConditional %290 %291 %294
        %291 = OpLabel
        %293 = OpFSub %6 %73 %285
               OpBranch %294
        %294 = OpLabel
        %511 = OpPhi %6 %285 %276 %293 %291
        %296 = OpCompositeExtract %6 %235 0
        %297 = OpFOrdLessThan %23 %296 %27
               OpSelectionMerge %301 None
               OpBranchConditional %297 %298 %301
        %298 = OpLabel
        %300 = OpFSub %6 %81 %511
               OpBranch %301
        %301 = OpLabel
        %512 = OpPhi %6 %511 %294 %300 %298
        %303 = OpCompositeExtract %6 %235 1
        %304 = OpFOrdLessThan %23 %303 %27
               OpSelectionMerge %308 None
               OpBranchConditional %304 %305 %308
        %305 = OpLabel
        %307 = OpFNegate %6 %512
               OpBranch %308
        %308 = OpLabel
        %513 = OpPhi %6 %512 %301 %307 %305
               OpBranch %310
        %310 = OpLabel
        %514 = OpPhi %6 %27 %255 %513 %308
        %242 = OpCompositeConstruct %7 %237 %514
        %319 = OpFAdd %7 %117 %541
        %321 = OpExtInst %6 %1 Length %319
               OpSelectionMerge %394 None
               OpSwitch %36 %335
        %335 = OpLabel
        %338 = OpFOrdLessThan %23 %321 %22
               OpSelectionMerge %340 None
               OpBranchConditional %338 %339 %340
        %339 = OpLabel
               OpBranch %394
        %340 = OpLabel
        %342 = OpExtInst %7 %1 FAbs %319
        %344 = OpCompositeExtract %6 %342 1
        %346 = OpCompositeExtract %6 %342 0
        %347 = OpFOrdGreaterThan %23 %344 %346
               OpSelectionMerge %360 None
               OpBranchConditional %347 %348 %354
        %348 = OpLabel
        %353 = OpFDiv %6 %346 %344
               OpBranch %360
        %354 = OpLabel
        %359 = OpFDiv %6 %344 %346
               OpBranch %360
        %360 = OpLabel
        %520 = OpPhi %6 %353 %348 %359 %354
        %362 = OpFMul %6 %56 %520
        %364 = OpFMul %6 %362 %520
        %365 = OpFSub %6 %55 %364
        %367 = OpFMul %6 %365 %520
        %369 = OpFMul %6 %367 %19
        %374 = OpFOrdLessThan %23 %344 %346
               OpSelectionMerge %378 None
               OpBranchConditional %374 %375 %378
        %375 = OpLabel
        %377 = OpFSub %6 %73 %369
               OpBranch %378
        %378 = OpLabel
        %521 = OpPhi %6 %369 %360 %377 %375
        %380 = OpCompositeExtract %6 %319 0
        %381 = OpFOrdLessThan %23 %380 %27
               OpSelectionMerge %385 None
               OpBranchConditional %381 %382 %385
        %382 = OpLabel
        %384 = OpFSub %6 %81 %521
               OpBranch %385
        %385 = OpLabel
        %522 = OpPhi %6 %521 %378 %384 %382
        %387 = OpCompositeExtract %6 %319 1
        %388 = OpFOrdLessThan %23 %387 %27
               OpSelectionMerge %392 None
               OpBranchConditional %388 %389 %392
        %389 = OpLabel
        %391 = OpFNegate %6 %522
               OpBranch %392
        %392 = OpLabel
        %523 = OpPhi %6 %522 %385 %391 %389
               OpBranch %394
        %394 = OpLabel
        %524 = OpPhi %6 %27 %339 %523 %392
        %326 = OpCompositeConstruct %7 %321 %524
        %403 = OpFSub %7 %117 %96
        %405 = OpExtInst %6 %1 Length %403
               OpSelectionMerge %478 None
               OpSwitch %36 %419
        %419 = OpLabel
        %422 = OpFOrdLessThan %23 %405 %22
               OpSelectionMerge %424 None
               OpBranchConditional %422 %423 %424
        %423 = OpLabel
               OpBranch %478
        %424 = OpLabel
        %426 = OpExtInst %7 %1 FAbs %403
        %428 = OpCompositeExtract %6 %426 1
        %430 = OpCompositeExtract %6 %426 0
        %431 = OpFOrdGreaterThan %23 %428 %430
               OpSelectionMerge %444 None
               OpBranchConditional %431 %432 %438
        %432 = OpLabel
        %437 = OpFDiv %6 %430 %428
               OpBranch %444
        %438 = OpLabel
        %443 = OpFDiv %6 %428 %430
               OpBranch %444
        %444 = OpLabel
        %530 = OpPhi %6 %437 %432 %443 %438
        %446 = OpFMul %6 %56 %530
        %448 = OpFMul %6 %446 %530
        %449 = OpFSub %6 %55 %448
        %451 = OpFMul %6 %449 %530
        %453 = OpFMul %6 %451 %19
        %458 = OpFOrdLessThan %23 %428 %430
               OpSelectionMerge %462 None
               OpBranchConditional %458 %459 %462
        %459 = OpLabel
        %461 = OpFSub %6 %73 %453
               OpBranch %462
        %462 = OpLabel
        %531 = OpPhi %6 %453 %444 %461 %459
        %464 = OpCompositeExtract %6 %403 0
        %465 = OpFOrdLessThan %23 %464 %27
               OpSelectionMerge %469 None
               OpBranchConditional %465 %466 %469
        %466 = OpLabel
        %468 = OpFSub %6 %81 %531
               OpBranch %469
        %469 = OpLabel
        %532 = OpPhi %6 %531 %462 %468 %466
        %471 = OpCompositeExtract %6 %403 1
        %472 = OpFOrdLessThan %23 %471 %27
               OpSelectionMerge %476 None
               OpBranchConditional %472 %473 %476
        %473 = OpLabel
        %475 = OpFNegate %6 %532
               OpBranch %476
        %476 = OpLabel
        %533 = OpPhi %6 %532 %469 %475 %473
               OpBranch %478
        %478 = OpLabel
        %534 = OpPhi %6 %27 %423 %533 %476
        %410 = OpCompositeConstruct %7 %405 %534
        %140 = OpFSub %7 %242 %326
        %142 = OpFAdd %7 %140 %410
        %145 = OpVectorTimesScalar %7 %142 %144
        %146 = OpExtInst %7 %1 Floor %145
        %148 = OpFMul %7 %146 %542
        %155 = OpLoad %152 %154
        %157 = OpImageSampleImplicitLod %111 %155 %148
        %160 = OpCompositeExtract %6 %157 0
        %161 = OpCompositeExtract %6 %157 1
        %162 = OpCompositeExtract %6 %157 2
        %167 = OpCompositeConstruct %158 %160 %161 %162
        %196 = OpExtInst %6 %1 FMin %162 %162
        %216 = OpCompositeConstruct %158 %160 %161 %196
        %217 = OpExtInst %158 %1 FMin %167 %216
        %218 = OpCompositeExtract %6 %217 0
        %219 = OpCompositeExtract %6 %217 1
        %220 = OpCompositeExtract %6 %217 2
        %221 = OpCompositeConstruct %111 %218 %219 %220 %81
               OpStore %150 %221
               OpReturn
               OpFunctionEnd

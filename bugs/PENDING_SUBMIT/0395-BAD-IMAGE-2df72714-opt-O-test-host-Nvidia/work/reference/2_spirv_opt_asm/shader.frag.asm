; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 492
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %115 %152
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %115 "gl_FragCoord"
               OpName %152 "_GLF_color"
               OpName %156 "tex"
               OpDecorate %115 BuiltIn FragCoord
               OpDecorate %152 Location 0
               OpDecorate %156 RelaxedPrecision
               OpDecorate %156 DescriptorSet 0
               OpDecorate %156 Binding 0
               OpDecorate %157 RelaxedPrecision
               OpDecorate %159 RelaxedPrecision
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
         %98 = OpConstantComposite %7 %73 %73
        %113 = OpTypeVector %6 4
        %114 = OpTypePointer Input %113
        %115 = OpVariable %114 Input
        %118 = OpConstant %6 0.00390625
        %146 = OpConstant %6 256
        %151 = OpTypePointer Output %113
        %152 = OpVariable %151 Output
        %153 = OpTypeImage %6 2D 0 0 0 1 Unknown
        %154 = OpTypeSampledImage %153
        %155 = OpTypePointer UniformConstant %154
        %156 = OpVariable %155 UniformConstant
        %485 = OpConstant %6 -0.421875
        %486 = OpConstant %6 -0.8125
        %487 = OpConstantComposite %7 %485 %486
        %488 = OpConstant %6 -0.734375
        %489 = OpConstant %6 -0.34375
        %490 = OpConstantComposite %7 %488 %489
        %491 = OpConstantComposite %7 %118 %118
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %116 = OpLoad %113 %115
        %117 = OpVectorShuffle %7 %116 %116 0 1
        %119 = OpVectorTimesScalar %7 %117 %118
        %182 = OpFAdd %7 %119 %487
        %184 = OpExtInst %6 %1 Length %182
               OpSelectionMerge %257 None
               OpSwitch %36 %198
        %198 = OpLabel
        %201 = OpFOrdLessThan %23 %184 %22
               OpSelectionMerge %203 None
               OpBranchConditional %201 %202 %203
        %202 = OpLabel
               OpBranch %257
        %203 = OpLabel
        %205 = OpExtInst %7 %1 FAbs %182
        %207 = OpCompositeExtract %6 %205 1
        %209 = OpCompositeExtract %6 %205 0
        %210 = OpFOrdGreaterThan %23 %207 %209
               OpSelectionMerge %223 None
               OpBranchConditional %210 %211 %217
        %211 = OpLabel
        %216 = OpFDiv %6 %209 %207
               OpBranch %223
        %217 = OpLabel
        %222 = OpFDiv %6 %207 %209
               OpBranch %223
        %223 = OpLabel
        %459 = OpPhi %6 %216 %211 %222 %217
        %225 = OpFMul %6 %56 %459
        %227 = OpFMul %6 %225 %459
        %228 = OpFSub %6 %55 %227
        %230 = OpFMul %6 %228 %459
        %232 = OpFMul %6 %230 %19
        %237 = OpFOrdLessThan %23 %207 %209
               OpSelectionMerge %241 None
               OpBranchConditional %237 %238 %241
        %238 = OpLabel
        %240 = OpFSub %6 %73 %232
               OpBranch %241
        %241 = OpLabel
        %460 = OpPhi %6 %232 %223 %240 %238
        %243 = OpCompositeExtract %6 %182 0
        %244 = OpFOrdLessThan %23 %243 %27
               OpSelectionMerge %248 None
               OpBranchConditional %244 %245 %248
        %245 = OpLabel
        %247 = OpFSub %6 %81 %460
               OpBranch %248
        %248 = OpLabel
        %461 = OpPhi %6 %460 %241 %247 %245
        %250 = OpCompositeExtract %6 %182 1
        %251 = OpFOrdLessThan %23 %250 %27
               OpSelectionMerge %255 None
               OpBranchConditional %251 %252 %255
        %252 = OpLabel
        %254 = OpFNegate %6 %461
               OpBranch %255
        %255 = OpLabel
        %462 = OpPhi %6 %461 %248 %254 %252
               OpBranch %257
        %257 = OpLabel
        %463 = OpPhi %6 %27 %202 %462 %255
        %189 = OpCompositeConstruct %7 %184 %463
        %267 = OpFAdd %7 %119 %490
        %269 = OpExtInst %6 %1 Length %267
               OpSelectionMerge %342 None
               OpSwitch %36 %283
        %283 = OpLabel
        %286 = OpFOrdLessThan %23 %269 %22
               OpSelectionMerge %288 None
               OpBranchConditional %286 %287 %288
        %287 = OpLabel
               OpBranch %342
        %288 = OpLabel
        %290 = OpExtInst %7 %1 FAbs %267
        %292 = OpCompositeExtract %6 %290 1
        %294 = OpCompositeExtract %6 %290 0
        %295 = OpFOrdGreaterThan %23 %292 %294
               OpSelectionMerge %308 None
               OpBranchConditional %295 %296 %302
        %296 = OpLabel
        %301 = OpFDiv %6 %294 %292
               OpBranch %308
        %302 = OpLabel
        %307 = OpFDiv %6 %292 %294
               OpBranch %308
        %308 = OpLabel
        %469 = OpPhi %6 %301 %296 %307 %302
        %310 = OpFMul %6 %56 %469
        %312 = OpFMul %6 %310 %469
        %313 = OpFSub %6 %55 %312
        %315 = OpFMul %6 %313 %469
        %317 = OpFMul %6 %315 %19
        %322 = OpFOrdLessThan %23 %292 %294
               OpSelectionMerge %326 None
               OpBranchConditional %322 %323 %326
        %323 = OpLabel
        %325 = OpFSub %6 %73 %317
               OpBranch %326
        %326 = OpLabel
        %470 = OpPhi %6 %317 %308 %325 %323
        %328 = OpCompositeExtract %6 %267 0
        %329 = OpFOrdLessThan %23 %328 %27
               OpSelectionMerge %333 None
               OpBranchConditional %329 %330 %333
        %330 = OpLabel
        %332 = OpFSub %6 %81 %470
               OpBranch %333
        %333 = OpLabel
        %471 = OpPhi %6 %470 %326 %332 %330
        %335 = OpCompositeExtract %6 %267 1
        %336 = OpFOrdLessThan %23 %335 %27
               OpSelectionMerge %340 None
               OpBranchConditional %336 %337 %340
        %337 = OpLabel
        %339 = OpFNegate %6 %471
               OpBranch %340
        %340 = OpLabel
        %472 = OpPhi %6 %471 %333 %339 %337
               OpBranch %342
        %342 = OpLabel
        %473 = OpPhi %6 %27 %287 %472 %340
        %274 = OpCompositeConstruct %7 %269 %473
        %352 = OpFSub %7 %119 %98
        %354 = OpExtInst %6 %1 Length %352
               OpSelectionMerge %427 None
               OpSwitch %36 %368
        %368 = OpLabel
        %371 = OpFOrdLessThan %23 %354 %22
               OpSelectionMerge %373 None
               OpBranchConditional %371 %372 %373
        %372 = OpLabel
               OpBranch %427
        %373 = OpLabel
        %375 = OpExtInst %7 %1 FAbs %352
        %377 = OpCompositeExtract %6 %375 1
        %379 = OpCompositeExtract %6 %375 0
        %380 = OpFOrdGreaterThan %23 %377 %379
               OpSelectionMerge %393 None
               OpBranchConditional %380 %381 %387
        %381 = OpLabel
        %386 = OpFDiv %6 %379 %377
               OpBranch %393
        %387 = OpLabel
        %392 = OpFDiv %6 %377 %379
               OpBranch %393
        %393 = OpLabel
        %479 = OpPhi %6 %386 %381 %392 %387
        %395 = OpFMul %6 %56 %479
        %397 = OpFMul %6 %395 %479
        %398 = OpFSub %6 %55 %397
        %400 = OpFMul %6 %398 %479
        %402 = OpFMul %6 %400 %19
        %407 = OpFOrdLessThan %23 %377 %379
               OpSelectionMerge %411 None
               OpBranchConditional %407 %408 %411
        %408 = OpLabel
        %410 = OpFSub %6 %73 %402
               OpBranch %411
        %411 = OpLabel
        %480 = OpPhi %6 %402 %393 %410 %408
        %413 = OpCompositeExtract %6 %352 0
        %414 = OpFOrdLessThan %23 %413 %27
               OpSelectionMerge %418 None
               OpBranchConditional %414 %415 %418
        %415 = OpLabel
        %417 = OpFSub %6 %81 %480
               OpBranch %418
        %418 = OpLabel
        %481 = OpPhi %6 %480 %411 %417 %415
        %420 = OpCompositeExtract %6 %352 1
        %421 = OpFOrdLessThan %23 %420 %27
               OpSelectionMerge %425 None
               OpBranchConditional %421 %422 %425
        %422 = OpLabel
        %424 = OpFNegate %6 %481
               OpBranch %425
        %425 = OpLabel
        %482 = OpPhi %6 %481 %418 %424 %422
               OpBranch %427
        %427 = OpLabel
        %483 = OpPhi %6 %27 %372 %482 %425
        %359 = OpCompositeConstruct %7 %354 %483
        %142 = OpFSub %7 %189 %274
        %144 = OpFAdd %7 %142 %359
        %147 = OpVectorTimesScalar %7 %144 %146
        %148 = OpExtInst %7 %1 Floor %147
        %150 = OpFMul %7 %148 %491
        %157 = OpLoad %154 %156
        %159 = OpImageSampleImplicitLod %113 %157 %150
        %162 = OpCompositeExtract %6 %159 0
        %163 = OpCompositeExtract %6 %159 1
        %164 = OpCompositeExtract %6 %159 2
        %165 = OpCompositeConstruct %113 %162 %163 %164 %81
               OpStore %152 %165
               OpReturn
               OpFunctionEnd

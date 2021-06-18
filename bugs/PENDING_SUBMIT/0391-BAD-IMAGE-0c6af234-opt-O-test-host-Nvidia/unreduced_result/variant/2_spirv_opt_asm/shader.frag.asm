; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 496
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52 %98
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %25 "buf_push"
               OpMemberName %25 0 "injectionSwitch"
               OpName %27 ""
               OpName %52 "gl_FragCoord"
               OpName %73 "tex"
               OpName %98 "_GLF_color"
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %52 BuiltIn FragCoord
               OpDecorate %73 RelaxedPrecision
               OpDecorate %73 DescriptorSet 0
               OpDecorate %73 Binding 0
               OpDecorate %74 RelaxedPrecision
               OpDecorate %76 RelaxedPrecision
               OpDecorate %77 RelaxedPrecision
               OpDecorate %95 RelaxedPrecision
               OpDecorate %98 Location 0
               OpDecorate %230 RelaxedPrecision
               OpDecorate %231 RelaxedPrecision
               OpDecorate %234 RelaxedPrecision
               OpDecorate %318 RelaxedPrecision
               OpDecorate %472 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %14 = OpConstant %10 1
         %15 = OpConstantComposite %11 %14 %14
         %16 = OpConstant %10 0.00390625
         %17 = OpTypeBool
         %18 = OpConstantFalse %17
         %25 = OpTypeStruct %11
         %26 = OpTypePointer PushConstant %25
         %27 = OpVariable %26 PushConstant
         %28 = OpTypeInt 32 0
         %29 = OpConstant %28 1
         %30 = OpTypePointer PushConstant %10
         %44 = OpConstant %10 0
         %48 = OpConstant %10 0.0078125
         %50 = OpTypeVector %10 4
         %51 = OpTypePointer Input %50
         %52 = OpVariable %51 Input
         %55 = OpConstant %28 0
         %56 = OpTypePointer Input %10
         %60 = OpConstant %10 -80.0800018
         %70 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %71 = OpTypeSampledImage %70
         %72 = OpTypePointer UniformConstant %71
         %73 = OpVariable %72 UniformConstant
         %85 = OpConstantTrue %17
         %97 = OpTypePointer Output %50
         %98 = OpVariable %97 Output
        %148 = OpTypeVector %10 3
        %149 = OpTypeMatrix %148 3
        %156 = OpTypeVector %17 4
        %173 = OpConstant %6 32
        %180 = OpConstant %6 1
        %242 = OpConstant %10 -19.4500008
        %248 = OpConstant %10 -4.5
        %250 = OpConstant %10 480.10199
        %251 = OpConstant %10 42.6399994
        %433 = OpConstantComposite %148 %14 %14 %14
        %434 = OpConstantComposite %149 %433 %433 %433
        %453 = OpConstant %10 0.03125
        %494 = OpUndef %10
        %495 = OpUndef %17
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %31 = OpAccessChain %30 %27 %9 %29
         %32 = OpLoad %10 %31
         %38 = OpExtInst %10 %1 FMax %32 %32
         %39 = OpExtInst %10 %1 FMin %32 %38
         %40 = OpFDiv %10 %16 %39
         %41 = OpExtInst %10 %1 FMax %40 %16
         %42 = OpVectorTimesScalar %11 %15 %41
         %53 = OpLoad %50 %52
         %54 = OpVectorShuffle %11 %53 %53 0 1
         %57 = OpAccessChain %56 %52 %55
         %58 = OpLoad %10 %57
         %59 = OpFOrdLessThan %17 %58 %44
         %61 = OpSelect %10 %59 %60 %14
         %62 = OpExtInst %10 %1 FMin %14 %61
         %64 = OpExtInst %10 %1 FMin %14 %62
         %66 = OpFMul %10 %64 %16
         %68 = OpVectorTimesScalar %11 %54 %66
         %74 = OpLoad %71 %73
         %76 = OpImageSampleImplicitLod %50 %74 %68
         %77 = OpCompositeExtract %10 %76 1
         %80 = OpFSub %11 %68 %42
         %83 = OpFAdd %10 %77 %48
         %95 = OpImageSampleImplicitLod %50 %74 %80
        %124 = OpCompositeExtract %10 %95 1
               OpBranch %160
        %160 = OpLabel
        %480 = OpPhi %11 %80 %5 %205 %163
        %472 = OpPhi %6 %9 %5 %234 %163
        %471 = OpPhi %10 %83 %5 %209 %163
        %470 = OpPhi %10 %124 %5 %482 %163
               OpLoopMerge %162 %163 None
               OpBranch %164
        %164 = OpLabel
        %169 = OpFOrdLessThan %17 %470 %471
               OpSelectionMerge %171 None
               OpBranchConditional %169 %170 %171
        %170 = OpLabel
        %201 = OpSLessThan %17 %472 %173
               OpBranch %171
        %171 = OpLabel
        %202 = OpPhi %17 %169 %164 %201 %170
               OpBranchConditional %202 %161 %162
        %161 = OpLabel
        %205 = OpFSub %11 %480 %42
        %209 = OpFAdd %10 %471 %48
        %212 = OpAccessChain %56 %52 %29
        %213 = OpLoad %10 %212
        %214 = OpFOrdGreaterThanEqual %17 %213 %44
        %215 = OpLogicalAnd %17 %214 %85
        %219 = OpLogicalNot %17 %215
        %223 = OpLogicalNot %17 %219
        %224 = OpLogicalNot %17 %223
        %225 = OpLogicalNot %17 %224
               OpSelectionMerge %227 None
               OpBranchConditional %225 %226 %227
        %226 = OpLabel
        %230 = OpImageSampleImplicitLod %50 %74 %205
        %231 = OpCompositeExtract %10 %230 1
               OpBranch %227
        %227 = OpLabel
        %482 = OpPhi %10 %470 %161 %231 %226
        %234 = OpIAdd %6 %472 %180
               OpBranch %163
        %163 = OpLabel
               OpBranch %160
        %162 = OpLabel
        %241 = OpCompositeExtract %10 %53 1
        %249 = OpCompositeConstruct %50 %494 %241 %242 %248
        %258 = OpCompositeConstruct %50 %250 %251 %494 %494
        %262 = OpCompositeConstruct %156 %18 %18 %495 %85
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
        %276 = OpLabel
               OpBranch %277
        %277 = OpLabel
        %282 = OpConvertSToF %10 %472
        %285 = OpExtInst %10 %1 FMin %282 %282
        %306 = OpExtInst %10 %1 FMax %285 %285
        %312 = OpExtInst %10 %1 FMax %306 %285
        %318 = OpBitwiseOr %6 %472 %472
        %319 = OpConvertSToF %10 %318
        %322 = OpExtInst %10 %1 FMin %319 %282
        %335 = OpExtInst %10 %1 FMax %322 %285
        %341 = OpExtInst %10 %1 FMax %335 %285
        %342 = OpExtInst %10 %1 FMin %312 %341
        %392 = OpExtInst %10 %1 FMin %312 %312
        %393 = OpExtInst %10 %1 FMin %342 %392
        %411 = OpCompositeConstruct %148 %393 %14 %44
        %435 = OpTranspose %149 %434
        %436 = OpTranspose %149 %435
        %437 = OpTranspose %149 %436
        %438 = OpTranspose %149 %437
        %440 = OpTranspose %149 %438
        %441 = OpTranspose %149 %440
        %443 = OpCompositeExtract %148 %441 0
        %444 = OpFDiv %148 %411 %443
        %452 = OpCompositeExtract %10 %444 0
        %454 = OpFMul %10 %452 %453
        %459 = OpCompositeConstruct %50 %454 %454 %454 %14
               OpStore %98 %459
        %463 = OpLogicalAnd %17 %59 %85
        %464 = OpLogicalNot %17 %463
        %465 = OpLogicalNot %17 %464
               OpLoopMerge %279 %277 None
               OpBranchConditional %465 %277 %279
        %279 = OpLabel
               OpBranch %275
        %274 = OpLabel
               OpBranch %275
        %275 = OpLabel
               OpReturn
               OpFunctionEnd

; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 91
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %75
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %22 "gl_FragCoord"
               OpName %30 "tex"
               OpName %75 "_GLF_color"
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %30 RelaxedPrecision
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %31 RelaxedPrecision
               OpDecorate %33 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %46 RelaxedPrecision
               OpDecorate %47 RelaxedPrecision
               OpDecorate %69 RelaxedPrecision
               OpDecorate %70 RelaxedPrecision
               OpDecorate %75 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %14 = OpConstant %10 0.00390625
         %15 = OpConstantComposite %11 %14 %14
         %18 = OpConstant %10 0.0078125
         %20 = OpTypeVector %10 4
         %21 = OpTypePointer Input %20
         %22 = OpVariable %21 Input
         %27 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %28 = OpTypeSampledImage %27
         %29 = OpTypePointer UniformConstant %28
         %30 = OpVariable %29 UniformConstant
         %55 = OpTypeBool
         %58 = OpConstant %6 32
         %72 = OpConstant %6 1
         %74 = OpTypePointer Output %20
         %75 = OpVariable %74 Output
         %78 = OpConstant %10 0.03125
         %82 = OpConstant %10 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %23 = OpLoad %20 %22
         %24 = OpVectorShuffle %11 %23 %23 0 1
         %25 = OpVectorTimesScalar %11 %24 %14
         %31 = OpLoad %28 %30
         %33 = OpImageSampleImplicitLod %20 %31 %25
         %36 = OpCompositeExtract %10 %33 1
         %39 = OpFSub %11 %25 %15
         %42 = OpFAdd %10 %36 %18
         %46 = OpImageSampleImplicitLod %20 %31 %39
         %47 = OpCompositeExtract %10 %46 1
               OpBranch %48
         %48 = OpLabel
         %90 = OpPhi %11 %39 %5 %63 %49
         %89 = OpPhi %6 %9 %5 %73 %49
         %88 = OpPhi %10 %42 %5 %66 %49
         %87 = OpPhi %10 %47 %5 %70 %49
         %56 = OpFOrdLessThan %55 %87 %88
         %59 = OpSLessThan %55 %89 %58
         %60 = OpLogicalAnd %55 %56 %59
               OpLoopMerge %50 %49 None
               OpBranchConditional %60 %49 %50
         %49 = OpLabel
         %63 = OpFSub %11 %90 %15
         %66 = OpFAdd %10 %88 %18
         %69 = OpImageSampleImplicitLod %20 %31 %63
         %70 = OpCompositeExtract %10 %69 1
         %73 = OpIAdd %6 %89 %72
               OpBranch %48
         %50 = OpLabel
         %77 = OpConvertSToF %10 %89
         %79 = OpFMul %10 %77 %78
         %86 = OpCompositeConstruct %20 %79 %79 %79 %82
               OpStore %75 %86
               OpReturn
               OpFunctionEnd

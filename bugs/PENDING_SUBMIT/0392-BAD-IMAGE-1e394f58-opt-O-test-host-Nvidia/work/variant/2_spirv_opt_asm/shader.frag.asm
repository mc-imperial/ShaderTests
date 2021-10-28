; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 108
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %94
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %22 "gl_FragCoord"
               OpName %30 "tex"
               OpName %94 "_GLF_color"
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %30 RelaxedPrecision
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %31 RelaxedPrecision
               OpDecorate %33 RelaxedPrecision
               OpDecorate %65 RelaxedPrecision
               OpDecorate %66 RelaxedPrecision
               OpDecorate %88 RelaxedPrecision
               OpDecorate %89 RelaxedPrecision
               OpDecorate %94 Location 0
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
         %34 = OpConstant %10 1
         %74 = OpTypeBool
         %77 = OpConstant %6 32
         %91 = OpConstant %6 1
         %93 = OpTypePointer Output %20
         %94 = OpVariable %93 Output
         %97 = OpConstant %10 0.03125
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %23 = OpLoad %20 %22
         %24 = OpVectorShuffle %11 %23 %23 0 1
         %25 = OpVectorTimesScalar %11 %24 %14
         %31 = OpLoad %28 %30
         %33 = OpImageSampleImplicitLod %20 %31 %25
         %55 = OpCompositeExtract %10 %33 1
         %58 = OpFSub %11 %25 %15
         %61 = OpFAdd %10 %55 %18
         %65 = OpImageSampleImplicitLod %20 %31 %58
         %66 = OpCompositeExtract %10 %65 1
               OpBranch %67
         %67 = OpLabel
        %107 = OpPhi %11 %58 %5 %82 %68
        %106 = OpPhi %6 %9 %5 %92 %68
        %105 = OpPhi %10 %61 %5 %85 %68
        %104 = OpPhi %10 %66 %5 %89 %68
         %75 = OpFOrdLessThan %74 %104 %105
         %78 = OpSLessThan %74 %106 %77
         %79 = OpLogicalAnd %74 %75 %78
               OpLoopMerge %69 %68 None
               OpBranchConditional %79 %68 %69
         %68 = OpLabel
         %82 = OpFSub %11 %107 %15
         %85 = OpFAdd %10 %105 %18
         %88 = OpImageSampleImplicitLod %20 %31 %82
         %89 = OpCompositeExtract %10 %88 1
         %92 = OpIAdd %6 %106 %91
               OpBranch %67
         %69 = OpLabel
         %96 = OpConvertSToF %10 %106
         %98 = OpFMul %10 %96 %97
        %103 = OpCompositeConstruct %20 %98 %98 %98 %34
               OpStore %94 %103
               OpReturn
               OpFunctionEnd

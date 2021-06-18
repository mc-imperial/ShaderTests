; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 141
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %68
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %22 "gl_FragCoord"
               OpName %30 "tex"
               OpName %68 "_GLF_color"
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %30 RelaxedPrecision
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %31 RelaxedPrecision
               OpDecorate %33 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %52 RelaxedPrecision
               OpDecorate %68 Location 0
               OpDecorate %118 RelaxedPrecision
               OpDecorate %119 RelaxedPrecision
               OpDecorate %122 RelaxedPrecision
               OpDecorate %139 RelaxedPrecision
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
         %44 = OpTypeBool
         %54 = OpConstant %10 1
         %67 = OpTypePointer Output %20
         %68 = OpVariable %67 Output
        %107 = OpConstant %6 32
        %121 = OpConstant %6 1
        %125 = OpConstant %10 0.03125
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
         %52 = OpImageSampleImplicitLod %20 %31 %39
         %71 = OpCompositeExtract %10 %52 1
               OpBranch %98
         %98 = OpLabel
        %140 = OpPhi %11 %39 %5 %112 %99
        %139 = OpPhi %6 %9 %5 %122 %99
        %138 = OpPhi %10 %42 %5 %115 %99
        %137 = OpPhi %10 %71 %5 %119 %99
        %105 = OpFOrdLessThan %44 %137 %138
        %108 = OpSLessThan %44 %139 %107
        %109 = OpLogicalAnd %44 %105 %108
               OpLoopMerge %100 %99 None
               OpBranchConditional %109 %99 %100
         %99 = OpLabel
        %112 = OpFSub %11 %140 %15
        %115 = OpFAdd %10 %138 %18
        %118 = OpImageSampleImplicitLod %20 %31 %112
        %119 = OpCompositeExtract %10 %118 1
        %122 = OpIAdd %6 %139 %121
               OpBranch %98
        %100 = OpLabel
        %124 = OpConvertSToF %10 %139
        %126 = OpFMul %10 %124 %125
        %132 = OpCompositeConstruct %20 %126 %126 %126 %54
               OpStore %68 %132
               OpReturn
               OpFunctionEnd

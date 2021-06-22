; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 56
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %16
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %13 "tex"
               OpName %16 "gl_FragCoord"
               OpName %25 "GLF_live11uselessOutVariable"
               OpName %27 "ResType"
               OpName %35 "GLF_live19_looplimiter5"
               OpName %37 "GLF_live19i"
               OpDecorate %9 Location 0
               OpDecorate %13 RelaxedPrecision
               OpDecorate %13 DescriptorSet 0
               OpDecorate %13 Binding 0
               OpDecorate %14 RelaxedPrecision
               OpDecorate %16 BuiltIn FragCoord
               OpDecorate %22 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeImage %6 2D 0 0 0 1 Unknown
         %11 = OpTypeSampledImage %10
         %12 = OpTypePointer UniformConstant %11
         %13 = OpVariable %12 UniformConstant
         %15 = OpTypePointer Input %7
         %16 = OpVariable %15 Input
         %17 = OpTypeVector %6 2
         %20 = OpConstant %6 0.00390625
         %23 = OpTypeInt 32 0
         %24 = OpTypePointer Function %23
         %26 = OpConstant %23 1
         %27 = OpTypeStruct %23 %23
         %31 = OpTypeBool
         %33 = OpTypeInt 32 1
         %34 = OpTypePointer Function %33
         %36 = OpConstant %33 0
         %38 = OpConstant %33 10
         %44 = OpConstant %33 5
         %50 = OpConstant %33 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %25 = OpVariable %24 Function
         %35 = OpVariable %34 Function
         %37 = OpVariable %34 Function
         %14 = OpLoad %11 %13
         %18 = OpLoad %7 %16
         %19 = OpVectorShuffle %17 %18 %18 0 1
         %21 = OpVectorTimesScalar %17 %19 %20
         %22 = OpImageSampleImplicitLod %7 %14 %21
               OpStore %9 %22
               OpStore %25 %26
         %28 = OpIAddCarry %27 %26 %26
         %29 = OpCompositeExtract %23 %28 1
               OpStore %25 %29
         %30 = OpCompositeExtract %23 %28 0
         %32 = OpULessThan %31 %26 %30
               OpStore %35 %36
               OpStore %37 %38
               OpBranch %39
         %39 = OpLabel
               OpLoopMerge %41 %42 None
               OpBranch %40
         %40 = OpLabel
         %43 = OpLoad %33 %35
         %45 = OpSGreaterThanEqual %31 %43 %44
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %47
         %46 = OpLabel
               OpBranch %41
         %47 = OpLabel
         %49 = OpLoad %33 %35
         %51 = OpIAdd %33 %49 %50
               OpStore %35 %51
         %52 = OpLoad %33 %37
         %53 = OpIAdd %33 %52 %50
               OpStore %37 %53
               OpBranch %42
         %42 = OpLabel
         %54 = OpLoad %33 %37
         %55 = OpSLessThan %31 %54 %38
               OpBranchConditional %55 %39 %41
         %41 = OpLabel
               OpReturn
               OpFunctionEnd

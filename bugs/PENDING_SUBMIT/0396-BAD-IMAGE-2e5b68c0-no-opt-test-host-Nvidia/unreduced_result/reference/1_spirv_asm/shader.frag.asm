; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 23
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
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %14 = OpLoad %11 %13
         %18 = OpLoad %7 %16
         %19 = OpVectorShuffle %17 %18 %18 0 1
         %21 = OpVectorTimesScalar %17 %19 %20
         %22 = OpImageSampleImplicitLod %7 %14 %21
               OpStore %9 %22
               OpReturn
               OpFunctionEnd

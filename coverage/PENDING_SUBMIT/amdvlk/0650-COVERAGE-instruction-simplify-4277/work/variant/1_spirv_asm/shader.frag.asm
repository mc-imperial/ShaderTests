; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 39
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %18
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %13 "f"
               OpName %18 "gl_FragCoord"
               OpName %25 "buf0"
               OpMemberName %25 0 "_GLF_uniform_float_values"
               OpName %27 ""
               OpDecorate %9 Location 0
               OpDecorate %18 BuiltIn FragCoord
               OpDecorate %24 ArrayStride 16
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %27 DescriptorSet 0
               OpDecorate %27 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpConstant %6 1
         %11 = OpConstantComposite %7 %10 %10 %10 %10
         %12 = OpTypePointer Function %6
         %15 = OpConstant %6 0
         %17 = OpTypePointer Input %7
         %18 = OpVariable %17 Input
         %19 = OpTypeInt 32 0
         %20 = OpConstant %19 1
         %21 = OpTypePointer Input %6
         %24 = OpTypeArray %6 %20
         %25 = OpTypeStruct %24
         %26 = OpTypePointer Uniform %25
         %27 = OpVariable %26 Uniform
         %28 = OpTypeInt 32 1
         %29 = OpConstant %28 0
         %30 = OpTypePointer Uniform %6
         %33 = OpTypeBool
         %35 = OpConstantTrue %33
         %36 = OpTypeVector %33 4
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %13 = OpVariable %12 Function
         %14 = OpLoad %6 %13
         %16 = OpCompositeConstruct %7 %14 %15 %15 %10
         %22 = OpAccessChain %21 %18 %20
         %23 = OpLoad %6 %22
         %31 = OpAccessChain %30 %27 %29 %29
         %32 = OpLoad %6 %31
         %34 = OpFOrdLessThan %33 %23 %32
         %37 = OpCompositeConstruct %36 %34 %35 %35 %35
         %38 = OpSelect %7 %37 %16 %11
               OpStore %9 %38
               OpReturn
               OpFunctionEnd

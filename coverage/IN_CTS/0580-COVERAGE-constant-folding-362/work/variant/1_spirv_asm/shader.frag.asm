; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 47
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %22 "_GLF_color"
               OpName %27 "v"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %22 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 1
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpTypePointer Uniform %6
         %19 = OpTypeFloat 32
         %20 = OpTypeVector %19 4
         %21 = OpTypePointer Output %20
         %22 = OpVariable %21 Output
         %23 = OpConstant %19 0
         %24 = OpConstant %19 1
         %25 = OpConstantComposite %20 %23 %24 %23 %24
         %26 = OpTypePointer Function %20
         %34 = OpTypePointer Function %19
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %27 = OpVariable %26 Function
         %17 = OpAccessChain %16 %14 %15 %15
         %18 = OpLoad %6 %17
               OpStore %8 %18
               OpStore %22 %25
         %28 = OpLoad %20 %22
               OpStore %27 %28
         %29 = OpLoad %6 %8
         %30 = OpAccessChain %16 %14 %15 %15
         %31 = OpLoad %6 %30
         %32 = OpISub %6 %29 %31
         %33 = OpLoad %6 %8
         %35 = OpAccessChain %34 %27 %33
         %36 = OpLoad %19 %35
         %37 = OpAccessChain %34 %27 %32
               OpStore %37 %36
         %38 = OpLoad %6 %8
         %39 = OpLoad %6 %8
         %40 = OpAccessChain %16 %14 %15 %15
         %41 = OpLoad %6 %40
         %42 = OpIAdd %6 %39 %41
         %43 = OpAccessChain %34 %27 %42
         %44 = OpLoad %19 %43
         %45 = OpAccessChain %34 %27 %38
               OpStore %45 %44
         %46 = OpLoad %20 %27
               OpStore %22 %46
               OpReturn
               OpFunctionEnd

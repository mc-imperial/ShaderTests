; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 48
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %28
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_float_values"
               OpName %18 ""
               OpName %28 "_GLF_color"
               OpName %34 "buf1"
               OpMemberName %34 0 "_GLF_uniform_int_values"
               OpName %36 ""
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %28 Location 0
               OpDecorate %33 ArrayStride 16
               OpMemberDecorate %34 0 Offset 0
               OpDecorate %34 Block
               OpDecorate %36 DescriptorSet 0
               OpDecorate %36 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpConstant %6 1
         %11 = OpConstantComposite %7 %10 %10 %10 %10
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 1
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpTypeInt 32 1
         %20 = OpConstant %19 0
         %21 = OpTypePointer Uniform %6
         %27 = OpTypePointer Output %7
         %28 = OpVariable %27 Output
         %29 = OpConstant %13 0
         %30 = OpTypePointer Function %6
         %33 = OpTypeArray %19 %14
         %34 = OpTypeStruct %33
         %35 = OpTypePointer Uniform %34
         %36 = OpVariable %35 Uniform
         %37 = OpTypePointer Uniform %19
         %44 = OpConstant %13 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %12 = OpExtInst %7 %1 Cosh %11
         %22 = OpAccessChain %21 %18 %20 %20
         %23 = OpLoad %6 %22
         %24 = OpCompositeConstruct %7 %23 %23 %23 %23
         %25 = OpCompositeConstruct %7 %10 %10 %10 %10
         %26 = OpExtInst %7 %1 FClamp %12 %24 %25
               OpStore %9 %26
         %31 = OpAccessChain %30 %9 %29
         %32 = OpLoad %6 %31
         %38 = OpAccessChain %37 %36 %20 %20
         %39 = OpLoad %19 %38
         %40 = OpConvertSToF %6 %39
         %41 = OpAccessChain %37 %36 %20 %20
         %42 = OpLoad %19 %41
         %43 = OpConvertSToF %6 %42
         %45 = OpAccessChain %30 %9 %44
         %46 = OpLoad %6 %45
         %47 = OpCompositeConstruct %7 %32 %40 %43 %46
               OpStore %28 %47
               OpReturn
               OpFunctionEnd

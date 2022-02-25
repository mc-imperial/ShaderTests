; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 48
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %46
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "func("
               OpName %13 "a"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %46 "_GLF_color"
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpDecorate %46 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypeFunction %7
         %11 = OpTypeInt 32 1
         %12 = OpTypePointer Function %11
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 2
         %16 = OpTypeArray %11 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpConstant %11 0
         %21 = OpTypePointer Uniform %11
         %26 = OpConstant %11 24323
         %32 = OpConstant %11 1
         %45 = OpTypePointer Output %7
         %46 = OpVariable %45 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %47 = OpFunctionCall %7 %9
               OpStore %46 %47
               OpReturn
               OpFunctionEnd
          %9 = OpFunction %7 None %8
         %10 = OpLabel
         %13 = OpVariable %12 Function
         %22 = OpAccessChain %21 %19 %20 %20
         %23 = OpLoad %11 %22
               OpStore %13 %23
         %24 = OpLoad %11 %13
         %25 = OpLoad %11 %13
         %27 = OpShiftLeftLogical %11 %25 %26
         %28 = OpExtInst %11 %1 SMin %24 %27
         %29 = OpAccessChain %21 %19 %20 %20
         %30 = OpLoad %11 %29
         %31 = OpConvertSToF %6 %30
         %33 = OpAccessChain %21 %19 %20 %32
         %34 = OpLoad %11 %33
         %35 = OpConvertSToF %6 %34
         %36 = OpAccessChain %21 %19 %20 %32
         %37 = OpLoad %11 %36
         %38 = OpConvertSToF %6 %37
         %39 = OpAccessChain %21 %19 %20 %20
         %40 = OpLoad %11 %39
         %41 = OpConvertSToF %6 %40
         %42 = OpCompositeConstruct %7 %31 %35 %38 %41
               OpReturnValue %42
               OpFunctionEnd

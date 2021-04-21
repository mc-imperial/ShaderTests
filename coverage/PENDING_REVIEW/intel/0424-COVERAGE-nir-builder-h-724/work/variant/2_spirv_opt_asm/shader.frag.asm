; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 66
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %51
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %27 "buf2"
               OpMemberName %27 0 "zero"
               OpName %29 ""
               OpName %41 "buf0"
               OpMemberName %41 0 "_GLF_uniform_float_values"
               OpName %43 ""
               OpName %51 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 2
               OpDecorate %40 ArrayStride 16
               OpMemberDecorate %41 0 Offset 0
               OpDecorate %41 Block
               OpDecorate %43 DescriptorSet 0
               OpDecorate %43 Binding 0
               OpDecorate %51 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 3
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpConstant %10 1
         %19 = OpTypePointer Uniform %10
         %26 = OpConstant %10 3
         %27 = OpTypeStruct %10
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %34 = OpTypeBool
         %39 = OpConstant %11 1
         %40 = OpTypeArray %6 %39
         %41 = OpTypeStruct %40
         %42 = OpTypePointer Uniform %41
         %43 = OpVariable %42 Uniform
         %44 = OpTypePointer Uniform %6
         %47 = OpTypePointer Function %6
         %49 = OpTypeVector %6 4
         %50 = OpTypePointer Output %49
         %51 = OpVariable %50 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %10 %20
         %22 = OpConvertSToF %6 %21
         %23 = OpCompositeConstruct %7 %22 %22 %22
               OpStore %9 %23
         %30 = OpAccessChain %19 %29 %17
         %31 = OpLoad %10 %30
         %32 = OpAccessChain %19 %16 %17 %17
         %33 = OpLoad %10 %32
         %35 = OpSGreaterThan %34 %31 %33
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %37
         %36 = OpLabel
         %45 = OpAccessChain %44 %43 %17 %17
         %46 = OpLoad %6 %45
         %48 = OpAccessChain %47 %9 %26
               OpStore %48 %46
               OpBranch %37
         %37 = OpLabel
         %54 = OpAccessChain %47 %9 %21
         %55 = OpLoad %6 %54
         %58 = OpConvertSToF %6 %33
         %65 = OpCompositeConstruct %49 %55 %58 %58 %22
               OpStore %51 %65
               OpReturn
               OpFunctionEnd

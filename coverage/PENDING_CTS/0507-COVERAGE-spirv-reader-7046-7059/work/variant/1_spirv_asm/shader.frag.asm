; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 61
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %41
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "buf_push"
               OpMemberName %9 0 "m"
               OpName %11 ""
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %30 "buf1"
               OpMemberName %30 0 "_GLF_uniform_float_values"
               OpName %32 ""
               OpName %41 "_GLF_color"
               OpMemberDecorate %9 0 ColMajor
               OpMemberDecorate %9 0 Offset 0
               OpMemberDecorate %9 0 MatrixStride 16
               OpDecorate %9 Block
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpDecorate %29 ArrayStride 16
               OpMemberDecorate %30 0 Offset 0
               OpDecorate %30 Block
               OpDecorate %32 DescriptorSet 0
               OpDecorate %32 Binding 1
               OpDecorate %41 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypeMatrix %7 4
          %9 = OpTypeStruct %8
         %10 = OpTypePointer PushConstant %9
         %11 = OpVariable %10 PushConstant
         %12 = OpTypeInt 32 1
         %13 = OpConstant %12 0
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 2
         %16 = OpTypeArray %12 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpTypePointer Uniform %12
         %25 = OpTypePointer PushConstant %6
         %28 = OpConstant %14 1
         %29 = OpTypeArray %6 %28
         %30 = OpTypeStruct %29
         %31 = OpTypePointer Uniform %30
         %32 = OpVariable %31 Uniform
         %33 = OpTypePointer Uniform %6
         %36 = OpTypeBool
         %40 = OpTypePointer Output %7
         %41 = OpVariable %40 Output
         %42 = OpConstant %12 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %21 = OpAccessChain %20 %19 %13 %13
         %22 = OpLoad %12 %21
         %23 = OpAccessChain %20 %19 %13 %13
         %24 = OpLoad %12 %23
         %26 = OpAccessChain %25 %11 %13 %22 %24
         %27 = OpLoad %6 %26
         %34 = OpAccessChain %33 %32 %13 %13
         %35 = OpLoad %6 %34
         %37 = OpFOrdEqual %36 %27 %35
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %56
         %38 = OpLabel
         %43 = OpAccessChain %20 %19 %13 %42
         %44 = OpLoad %12 %43
         %45 = OpConvertSToF %6 %44
         %46 = OpAccessChain %20 %19 %13 %13
         %47 = OpLoad %12 %46
         %48 = OpConvertSToF %6 %47
         %49 = OpAccessChain %20 %19 %13 %13
         %50 = OpLoad %12 %49
         %51 = OpConvertSToF %6 %50
         %52 = OpAccessChain %20 %19 %13 %42
         %53 = OpLoad %12 %52
         %54 = OpConvertSToF %6 %53
         %55 = OpCompositeConstruct %7 %45 %48 %51 %54
               OpStore %41 %55
               OpBranch %39
         %56 = OpLabel
         %57 = OpAccessChain %20 %19 %13 %13
         %58 = OpLoad %12 %57
         %59 = OpConvertSToF %6 %58
         %60 = OpCompositeConstruct %7 %59 %59 %59 %59
               OpStore %41 %60
               OpBranch %39
         %39 = OpLabel
               OpReturn
               OpFunctionEnd

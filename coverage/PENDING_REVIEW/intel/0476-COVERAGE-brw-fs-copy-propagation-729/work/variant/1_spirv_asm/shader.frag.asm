; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 73
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %54
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %10 "buf2"
               OpMemberName %10 0 "zero"
               OpName %12 ""
               OpName %20 "buf0"
               OpMemberName %20 0 "_GLF_uniform_float_values"
               OpName %22 ""
               OpName %32 "buf1"
               OpMemberName %32 0 "_GLF_uniform_int_values"
               OpName %34 ""
               OpName %54 "_GLF_color"
               OpMemberDecorate %10 0 Offset 0
               OpDecorate %10 Block
               OpDecorate %12 DescriptorSet 0
               OpDecorate %12 Binding 2
               OpDecorate %19 ArrayStride 16
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 0
               OpDecorate %31 ArrayStride 16
               OpMemberDecorate %32 0 Offset 0
               OpDecorate %32 Block
               OpDecorate %34 DescriptorSet 0
               OpDecorate %34 Binding 1
               OpDecorate %54 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeFloat 32
         %10 = OpTypeStruct %9
         %11 = OpTypePointer Uniform %10
         %12 = OpVariable %11 Uniform
         %13 = OpConstant %6 0
         %14 = OpTypePointer Uniform %9
         %17 = OpTypeInt 32 0
         %18 = OpConstant %17 1
         %19 = OpTypeArray %9 %18
         %20 = OpTypeStruct %19
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %25 = OpTypeBool
         %30 = OpConstant %17 2
         %31 = OpTypeArray %6 %30
         %32 = OpTypeStruct %31
         %33 = OpTypePointer Uniform %32
         %34 = OpVariable %33 Uniform
         %35 = OpConstant %6 1
         %36 = OpTypePointer Uniform %6
         %52 = OpTypeVector %9 4
         %53 = OpTypePointer Output %52
         %54 = OpVariable %53 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %27 = OpVariable %7 Function
         %15 = OpAccessChain %14 %12 %13
         %16 = OpLoad %9 %15
         %23 = OpAccessChain %14 %22 %13 %13
         %24 = OpLoad %9 %23
         %26 = OpFOrdLessThan %25 %16 %24
               OpSelectionMerge %29 None
               OpBranchConditional %26 %28 %39
         %28 = OpLabel
         %37 = OpAccessChain %36 %34 %13 %35
         %38 = OpLoad %6 %37
               OpStore %27 %38
               OpBranch %29
         %39 = OpLabel
         %40 = OpAccessChain %36 %34 %13 %13
         %41 = OpLoad %6 %40
               OpStore %27 %41
               OpBranch %29
         %29 = OpLabel
         %42 = OpLoad %6 %27
         %43 = OpBitwiseOr %6 %42 %35
         %44 = OpNot %6 %43
               OpStore %8 %44
         %45 = OpLoad %6 %8
         %46 = OpAccessChain %36 %34 %13 %13
         %47 = OpLoad %6 %46
         %48 = OpNot %6 %47
         %49 = OpIEqual %25 %45 %48
               OpSelectionMerge %51 None
               OpBranchConditional %49 %50 %68
         %50 = OpLabel
         %55 = OpAccessChain %36 %34 %13 %13
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %9 %56
         %58 = OpAccessChain %36 %34 %13 %35
         %59 = OpLoad %6 %58
         %60 = OpConvertSToF %9 %59
         %61 = OpAccessChain %36 %34 %13 %35
         %62 = OpLoad %6 %61
         %63 = OpConvertSToF %9 %62
         %64 = OpAccessChain %36 %34 %13 %13
         %65 = OpLoad %6 %64
         %66 = OpConvertSToF %9 %65
         %67 = OpCompositeConstruct %52 %57 %60 %63 %66
               OpStore %54 %67
               OpBranch %51
         %68 = OpLabel
         %69 = OpAccessChain %36 %34 %13 %35
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %9 %70
         %72 = OpCompositeConstruct %52 %71 %71 %71 %71
               OpStore %54 %72
               OpBranch %51
         %51 = OpLabel
               OpReturn
               OpFunctionEnd

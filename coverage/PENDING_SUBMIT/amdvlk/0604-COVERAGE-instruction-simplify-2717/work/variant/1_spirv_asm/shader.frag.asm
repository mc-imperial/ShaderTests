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
               OpName %8 "_GLF_global_loop_count"
               OpName %18 "buf2"
               OpMemberName %18 0 "one"
               OpName %20 ""
               OpName %27 "buf0"
               OpMemberName %27 0 "_GLF_uniform_float_values"
               OpName %29 ""
               OpName %43 "buf1"
               OpMemberName %43 0 "_GLF_uniform_int_values"
               OpName %45 ""
               OpName %54 "_GLF_color"
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 2
               OpDecorate %26 ArrayStride 16
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 0
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 1
               OpDecorate %54 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %15 = OpConstant %6 1
         %17 = OpTypeFloat 32
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpTypePointer Uniform %17
         %24 = OpTypeInt 32 0
         %25 = OpConstant %24 1
         %26 = OpTypeArray %17 %25
         %27 = OpTypeStruct %26
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %32 = OpTypeBool
         %37 = OpConstant %6 10
         %41 = OpConstant %24 2
         %42 = OpTypeArray %6 %41
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %46 = OpTypePointer Uniform %6
         %52 = OpTypeVector %17 4
         %53 = OpTypePointer Output %52
         %54 = OpVariable %53 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %8 %9
               OpBranch %10
         %10 = OpLabel
               OpLoopMerge %12 %13 None
               OpBranch %11
         %11 = OpLabel
         %14 = OpLoad %6 %8
         %16 = OpIAdd %6 %14 %15
               OpStore %8 %16
               OpBranch %13
         %13 = OpLabel
         %22 = OpAccessChain %21 %20 %9
         %23 = OpLoad %17 %22
         %30 = OpAccessChain %21 %29 %9 %9
         %31 = OpLoad %17 %30
         %33 = OpFOrdLessThan %32 %23 %31
         %34 = OpSelect %6 %33 %15 %9
         %35 = OpSGreaterThan %32 %34 %15
         %36 = OpLoad %6 %8
         %38 = OpSLessThan %32 %36 %37
         %39 = OpLogicalAnd %32 %35 %38
               OpBranchConditional %39 %10 %12
         %12 = OpLabel
         %40 = OpLoad %6 %8
         %47 = OpAccessChain %46 %45 %9 %15
         %48 = OpLoad %6 %47
         %49 = OpIEqual %32 %40 %48
               OpSelectionMerge %51 None
               OpBranchConditional %49 %50 %68
         %50 = OpLabel
         %55 = OpAccessChain %46 %45 %9 %15
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %17 %56
         %58 = OpAccessChain %46 %45 %9 %9
         %59 = OpLoad %6 %58
         %60 = OpConvertSToF %17 %59
         %61 = OpAccessChain %46 %45 %9 %9
         %62 = OpLoad %6 %61
         %63 = OpConvertSToF %17 %62
         %64 = OpAccessChain %46 %45 %9 %15
         %65 = OpLoad %6 %64
         %66 = OpConvertSToF %17 %65
         %67 = OpCompositeConstruct %52 %57 %60 %63 %66
               OpStore %54 %67
               OpBranch %51
         %68 = OpLabel
         %69 = OpAccessChain %46 %45 %9 %9
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %17 %70
         %72 = OpCompositeConstruct %52 %71 %71 %71 %71
               OpStore %54 %72
               OpBranch %51
         %51 = OpLabel
               OpReturn
               OpFunctionEnd

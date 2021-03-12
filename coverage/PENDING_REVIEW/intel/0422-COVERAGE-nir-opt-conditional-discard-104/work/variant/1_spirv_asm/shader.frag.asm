; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 77
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %13
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %13 "_GLF_color"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %35 "i"
               OpName %57 "buf2"
               OpMemberName %57 0 "injectionSwitch"
               OpName %59 ""
               OpName %66 "buf1"
               OpMemberName %66 0 "_GLF_uniform_float_values"
               OpName %68 ""
               OpDecorate %13 Location 0
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpMemberDecorate %57 0 Offset 0
               OpDecorate %57 Block
               OpDecorate %59 DescriptorSet 0
               OpDecorate %59 Binding 2
               OpDecorate %65 ArrayStride 16
               OpMemberDecorate %66 0 Offset 0
               OpDecorate %66 Block
               OpDecorate %68 DescriptorSet 0
               OpDecorate %68 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Output %11
         %13 = OpVariable %12 Output
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 3
         %16 = OpTypeArray %6 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpConstant %6 0
         %21 = OpTypePointer Uniform %6
         %44 = OpConstant %6 2
         %47 = OpTypeBool
         %51 = OpConstant %6 3
         %56 = OpTypeVector %10 2
         %57 = OpTypeStruct %56
         %58 = OpTypePointer Uniform %57
         %59 = OpVariable %58 Uniform
         %60 = OpConstant %14 0
         %61 = OpTypePointer Uniform %10
         %64 = OpConstant %14 1
         %65 = OpTypeArray %10 %64
         %66 = OpTypeStruct %65
         %67 = OpTypePointer Uniform %66
         %68 = OpVariable %67 Uniform
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %35 = OpVariable %7 Function
               OpStore %8 %9
         %22 = OpAccessChain %21 %19 %20 %20
         %23 = OpLoad %6 %22
         %24 = OpConvertSToF %10 %23
         %25 = OpAccessChain %21 %19 %20 %9
         %26 = OpLoad %6 %25
         %27 = OpConvertSToF %10 %26
         %28 = OpAccessChain %21 %19 %20 %9
         %29 = OpLoad %6 %28
         %30 = OpConvertSToF %10 %29
         %31 = OpAccessChain %21 %19 %20 %20
         %32 = OpLoad %6 %31
         %33 = OpConvertSToF %10 %32
         %34 = OpCompositeConstruct %11 %24 %27 %30 %33
               OpStore %13 %34
         %36 = OpAccessChain %21 %19 %20 %9
         %37 = OpLoad %6 %36
               OpStore %35 %37
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %43 = OpLoad %6 %35
         %45 = OpAccessChain %21 %19 %20 %44
         %46 = OpLoad %6 %45
         %48 = OpSLessThan %47 %43 %46
               OpBranchConditional %48 %39 %40
         %39 = OpLabel
         %49 = OpLoad %6 %8
         %50 = OpIAdd %6 %49 %9
               OpStore %8 %50
         %52 = OpSGreaterThan %47 %49 %51
               OpSelectionMerge %54 None
               OpBranchConditional %52 %53 %54
         %53 = OpLabel
               OpBranch %40
         %54 = OpLabel
         %62 = OpAccessChain %61 %59 %20 %60
         %63 = OpLoad %10 %62
         %69 = OpAccessChain %61 %68 %20 %20
         %70 = OpLoad %10 %69
         %71 = OpFOrdGreaterThan %47 %63 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %73
         %72 = OpLabel
               OpKill
         %73 = OpLabel
               OpBranch %41
         %41 = OpLabel
         %75 = OpLoad %6 %35
         %76 = OpIAdd %6 %75 %9
               OpStore %35 %76
               OpBranch %38
         %40 = OpLabel
               OpReturn
               OpFunctionEnd

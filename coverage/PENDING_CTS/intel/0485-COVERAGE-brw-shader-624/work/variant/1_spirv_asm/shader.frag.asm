; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 80
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %11 "a"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_int_values"
               OpName %25 ""
               OpName %61 "_GLF_color"
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %61 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypePointer Function %6
         %12 = OpConstant %6 1
         %19 = OpConstant %6 100
         %20 = OpTypeInt 32 0
         %21 = OpConstant %20 2
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpTypePointer Uniform %6
         %30 = OpTypeBool
         %58 = OpTypeFloat 32
         %59 = OpTypeVector %58 4
         %60 = OpTypePointer Output %59
         %61 = OpVariable %60 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
               OpStore %8 %9
               OpStore %11 %12
               OpBranch %13
         %13 = OpLabel
               OpLoopMerge %15 %16 None
               OpBranch %17
         %17 = OpLabel
         %18 = OpLoad %6 %8
         %27 = OpAccessChain %26 %25 %9 %12
         %28 = OpLoad %6 %27
         %29 = OpISub %6 %19 %28
         %31 = OpSLessThan %30 %18 %29
               OpBranchConditional %31 %14 %15
         %14 = OpLabel
         %32 = OpLoad %6 %8
         %33 = OpIAdd %6 %32 %12
               OpStore %8 %33
               OpBranch %16
         %16 = OpLabel
               OpBranch %13
         %15 = OpLabel
         %34 = OpAccessChain %26 %25 %9 %9
         %35 = OpLoad %6 %34
         %36 = OpIEqual %30 %35 %9
               OpSelectionMerge %38 None
               OpBranchConditional %36 %37 %38
         %37 = OpLabel
               OpBranch %39
         %39 = OpLabel
               OpLoopMerge %41 %42 None
               OpBranch %43
         %43 = OpLabel
         %44 = OpLoad %6 %8
         %45 = OpSLessThan %30 %44 %19
               OpBranchConditional %45 %40 %41
         %40 = OpLabel
         %46 = OpLoad %6 %8
         %47 = OpIAdd %6 %46 %12
               OpStore %8 %47
         %48 = OpLoad %6 %11
         %49 = OpISub %6 %12 %48
         %50 = OpLoad %6 %11
         %51 = OpIMul %6 %50 %49
               OpStore %11 %51
               OpBranch %42
         %42 = OpLabel
               OpBranch %39
         %41 = OpLabel
               OpBranch %38
         %38 = OpLabel
         %52 = OpLoad %6 %11
         %53 = OpAccessChain %26 %25 %9 %9
         %54 = OpLoad %6 %53
         %55 = OpIEqual %30 %52 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %75
         %56 = OpLabel
         %62 = OpAccessChain %26 %25 %9 %12
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %58 %63
         %65 = OpAccessChain %26 %25 %9 %9
         %66 = OpLoad %6 %65
         %67 = OpConvertSToF %58 %66
         %68 = OpAccessChain %26 %25 %9 %9
         %69 = OpLoad %6 %68
         %70 = OpConvertSToF %58 %69
         %71 = OpAccessChain %26 %25 %9 %12
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %58 %72
         %74 = OpCompositeConstruct %59 %64 %67 %70 %73
               OpStore %61 %74
               OpBranch %57
         %75 = OpLabel
         %76 = OpAccessChain %26 %25 %9 %9
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %58 %77
         %79 = OpCompositeConstruct %59 %78 %78 %78 %78
               OpStore %61 %79
               OpBranch %57
         %57 = OpLabel
               OpReturn
               OpFunctionEnd

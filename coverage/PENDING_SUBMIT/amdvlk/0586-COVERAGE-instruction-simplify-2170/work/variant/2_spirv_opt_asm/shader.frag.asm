; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 108
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %34 %75
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %34 "gl_FragCoord"
               OpName %65 "buf0"
               OpMemberName %65 0 "_GLF_uniform_int_values"
               OpName %67 ""
               OpName %75 "_GLF_color"
               OpDecorate %34 BuiltIn FragCoord
               OpDecorate %64 ArrayStride 16
               OpMemberDecorate %65 0 Offset 0
               OpDecorate %65 Block
               OpDecorate %67 DescriptorSet 0
               OpDecorate %67 Binding 0
               OpDecorate %75 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %9 = OpConstant %6 0
         %16 = OpConstant %6 10
         %17 = OpTypeBool
         %20 = OpConstant %6 1
         %31 = OpTypeFloat 32
         %32 = OpTypeVector %31 4
         %33 = OpTypePointer Input %32
         %34 = OpVariable %33 Input
         %35 = OpTypeInt 32 0
         %36 = OpConstant %35 1
         %37 = OpTypePointer Input %31
         %40 = OpConstant %31 0
         %61 = OpConstantFalse %17
         %63 = OpConstant %35 3
         %64 = OpTypeArray %6 %63
         %65 = OpTypeStruct %64
         %66 = OpTypePointer Uniform %65
         %67 = OpVariable %66 Uniform
         %68 = OpTypePointer Uniform %6
         %74 = OpTypePointer Output %32
         %75 = OpVariable %74 Output
         %79 = OpConstant %6 2
         %97 = OpConstant %35 0
         %98 = OpTypePointer Function %17
        %100 = OpConstantTrue %17
        %107 = OpTypePointer Function %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %107 Function
         %99 = OpVariable %98 Function %61
               OpSelectionMerge %95 None
               OpSwitch %97 %96
         %96 = OpLabel
               OpStore %8 %9
               OpBranch %10
         %10 = OpLabel
         %15 = OpLoad %6 %8
         %18 = OpSLessThan %17 %15 %16
               OpLoopMerge %12 %13 None
               OpBranchConditional %18 %11 %12
         %11 = OpLabel
         %19 = OpLoad %6 %8
         %21 = OpIAdd %6 %19 %20
               OpStore %8 %21
               OpBranch %22
         %22 = OpLabel
         %27 = OpLoad %6 %8
         %28 = OpSLessThan %17 %27 %16
               OpLoopMerge %24 %25 None
               OpBranchConditional %28 %23 %24
         %23 = OpLabel
         %29 = OpLoad %6 %8
         %30 = OpIAdd %6 %29 %20
               OpStore %8 %30
         %38 = OpAccessChain %37 %34 %36
         %39 = OpLoad %31 %38
         %41 = OpFOrdLessThan %17 %39 %40
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %43
         %42 = OpLabel
               OpBranch %25
         %43 = OpLabel
               OpSelectionMerge %49 None
               OpBranchConditional %41 %48 %49
         %48 = OpLabel
               OpStore %99 %100
               OpBranch %24
         %49 = OpLabel
               OpBranch %51
         %51 = OpLabel
               OpLoopMerge %53 %54 None
               OpBranch %52
         %52 = OpLabel
               OpSelectionMerge %59 None
               OpBranchConditional %41 %58 %59
         %58 = OpLabel
               OpStore %99 %100
               OpBranch %53
         %59 = OpLabel
               OpBranch %54
         %54 = OpLabel
               OpBranchConditional %61 %51 %53
         %53 = OpLabel
        %106 = OpLoad %17 %99
               OpSelectionMerge %105 None
               OpBranchConditional %106 %24 %105
        %105 = OpLabel
               OpBranch %25
         %25 = OpLabel
               OpBranch %22
         %24 = OpLabel
        %102 = OpLoad %17 %99
               OpSelectionMerge %101 None
               OpBranchConditional %102 %12 %101
        %101 = OpLabel
               OpBranch %13
         %13 = OpLabel
               OpBranch %10
         %12 = OpLabel
        %104 = OpLoad %17 %99
               OpSelectionMerge %103 None
               OpBranchConditional %104 %95 %103
        %103 = OpLabel
         %62 = OpLoad %6 %8
         %69 = OpAccessChain %68 %67 %9 %9
         %70 = OpLoad %6 %69
         %71 = OpIEqual %17 %62 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %90
         %72 = OpLabel
         %76 = OpAccessChain %68 %67 %9 %20
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %31 %77
         %80 = OpAccessChain %68 %67 %9 %79
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %31 %81
         %89 = OpCompositeConstruct %32 %78 %82 %82 %78
               OpStore %75 %89
               OpBranch %73
         %90 = OpLabel
         %91 = OpAccessChain %68 %67 %9 %79
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %31 %92
         %94 = OpCompositeConstruct %32 %93 %93 %93 %93
               OpStore %75 %94
               OpBranch %73
         %73 = OpLabel
               OpStore %99 %100
               OpBranch %95
         %95 = OpLabel
               OpReturn
               OpFunctionEnd

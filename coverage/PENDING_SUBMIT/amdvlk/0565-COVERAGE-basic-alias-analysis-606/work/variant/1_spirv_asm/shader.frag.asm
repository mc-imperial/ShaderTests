; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 126
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %107
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %13 "v"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_float_values"
               OpName %19 ""
               OpName %25 "i"
               OpName %28 "buf1"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpName %49 "j"
               OpName %75 "indexable"
               OpName %107 "_GLF_color"
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 1
               OpDecorate %107 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Function %11
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 1
         %16 = OpTypeArray %10 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpTypePointer Uniform %10
         %24 = OpTypePointer Function %6
         %26 = OpConstant %14 2
         %27 = OpTypeArray %6 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpConstant %6 1
         %32 = OpTypePointer Uniform %6
         %41 = OpTypeBool
         %44 = OpConstant %6 10
         %63 = OpTypeMatrix %11 4
         %64 = OpConstant %10 1
         %65 = OpConstant %10 0
         %66 = OpConstantComposite %11 %64 %65 %65 %65
         %67 = OpConstantComposite %11 %65 %64 %65 %65
         %68 = OpConstantComposite %11 %65 %65 %64 %65
         %69 = OpConstantComposite %11 %65 %65 %65 %64
         %70 = OpConstantComposite %63 %66 %67 %68 %69
         %74 = OpTypePointer Function %63
         %76 = OpTypePointer Function %10
        %101 = OpTypeVector %41 4
        %106 = OpTypePointer Output %11
        %107 = OpVariable %106 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %13 = OpVariable %12 Function
         %25 = OpVariable %24 Function
         %49 = OpVariable %24 Function
         %75 = OpVariable %74 Function
               OpStore %8 %9
         %21 = OpAccessChain %20 %19 %9 %9
         %22 = OpLoad %10 %21
         %23 = OpCompositeConstruct %11 %22 %22 %22 %22
               OpStore %13 %23
         %33 = OpAccessChain %32 %30 %9 %31
         %34 = OpLoad %6 %33
               OpStore %25 %34
               OpBranch %35
         %35 = OpLabel
               OpLoopMerge %37 %38 None
               OpBranch %39
         %39 = OpLabel
         %40 = OpLoad %6 %25
         %42 = OpSGreaterThanEqual %41 %40 %9
         %43 = OpLoad %6 %8
         %45 = OpSLessThan %41 %43 %44
         %46 = OpLogicalAnd %41 %42 %45
               OpBranchConditional %46 %36 %37
         %36 = OpLabel
         %47 = OpLoad %6 %8
         %48 = OpIAdd %6 %47 %31
               OpStore %8 %48
               OpStore %49 %31
               OpBranch %50
         %50 = OpLabel
               OpLoopMerge %52 %53 None
               OpBranch %54
         %54 = OpLabel
         %55 = OpLoad %6 %49
         %56 = OpSGreaterThanEqual %41 %55 %31
         %57 = OpLoad %6 %8
         %58 = OpSLessThan %41 %57 %44
         %59 = OpLogicalAnd %41 %56 %58
               OpBranchConditional %59 %51 %52
         %51 = OpLabel
         %60 = OpLoad %6 %8
         %61 = OpIAdd %6 %60 %31
               OpStore %8 %61
         %62 = OpLoad %6 %25
         %71 = OpLoad %6 %25
         %72 = OpAccessChain %32 %30 %9 %31
         %73 = OpLoad %6 %72
               OpStore %75 %70
         %77 = OpAccessChain %76 %75 %71 %73
         %78 = OpLoad %10 %77
         %79 = OpAccessChain %76 %13 %62
         %80 = OpLoad %10 %79
         %81 = OpFSub %10 %80 %78
         %82 = OpAccessChain %76 %13 %62
               OpStore %82 %81
               OpBranch %53
         %53 = OpLabel
         %83 = OpLoad %6 %49
         %84 = OpISub %6 %83 %31
               OpStore %49 %84
               OpBranch %50
         %52 = OpLabel
               OpBranch %38
         %38 = OpLabel
         %85 = OpLoad %6 %25
         %86 = OpISub %6 %85 %31
               OpStore %25 %86
               OpBranch %35
         %37 = OpLabel
         %87 = OpLoad %11 %13
         %88 = OpAccessChain %32 %30 %9 %31
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %10 %89
         %91 = OpAccessChain %32 %30 %9 %9
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %10 %92
         %94 = OpAccessChain %32 %30 %9 %31
         %95 = OpLoad %6 %94
         %96 = OpConvertSToF %10 %95
         %97 = OpAccessChain %32 %30 %9 %31
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %10 %98
        %100 = OpCompositeConstruct %11 %90 %93 %96 %99
        %102 = OpFOrdEqual %101 %87 %100
        %103 = OpAll %41 %102
               OpSelectionMerge %105 None
               OpBranchConditional %103 %104 %121
        %104 = OpLabel
        %108 = OpAccessChain %32 %30 %9 %31
        %109 = OpLoad %6 %108
        %110 = OpConvertSToF %10 %109
        %111 = OpAccessChain %32 %30 %9 %9
        %112 = OpLoad %6 %111
        %113 = OpConvertSToF %10 %112
        %114 = OpAccessChain %32 %30 %9 %9
        %115 = OpLoad %6 %114
        %116 = OpConvertSToF %10 %115
        %117 = OpAccessChain %32 %30 %9 %31
        %118 = OpLoad %6 %117
        %119 = OpConvertSToF %10 %118
        %120 = OpCompositeConstruct %11 %110 %113 %116 %119
               OpStore %107 %120
               OpBranch %105
        %121 = OpLabel
        %122 = OpAccessChain %32 %30 %9 %9
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %10 %123
        %125 = OpCompositeConstruct %11 %124 %124 %124 %124
               OpStore %107 %125
               OpBranch %105
        %105 = OpLabel
               OpReturn
               OpFunctionEnd

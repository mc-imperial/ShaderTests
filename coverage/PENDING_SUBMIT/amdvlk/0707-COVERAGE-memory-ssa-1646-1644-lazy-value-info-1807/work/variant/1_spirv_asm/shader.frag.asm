; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 120
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %101
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %23 "b"
               OpName %29 "arr"
               OpName %55 "i"
               OpName %101 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %101 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 4
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 0
         %19 = OpConstant %6 1
         %20 = OpTypePointer Uniform %6
         %26 = OpConstant %12 6
         %27 = OpTypeArray %6 %26
         %28 = OpTypePointer Function %27
         %51 = OpTypeBool
         %62 = OpConstant %6 3
         %92 = OpConstant %6 2
         %98 = OpTypeFloat 32
         %99 = OpTypeVector %98 4
        %100 = OpTypePointer Output %99
        %101 = OpVariable %100 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %91 = OpFunctionCall %6 %8
         %93 = OpAccessChain %20 %17 %18 %92
         %94 = OpLoad %6 %93
         %95 = OpIEqual %51 %91 %94
               OpSelectionMerge %97 None
               OpBranchConditional %95 %96 %115
         %96 = OpLabel
        %102 = OpAccessChain %20 %17 %18 %19
        %103 = OpLoad %6 %102
        %104 = OpConvertSToF %98 %103
        %105 = OpAccessChain %20 %17 %18 %18
        %106 = OpLoad %6 %105
        %107 = OpConvertSToF %98 %106
        %108 = OpAccessChain %20 %17 %18 %18
        %109 = OpLoad %6 %108
        %110 = OpConvertSToF %98 %109
        %111 = OpAccessChain %20 %17 %18 %19
        %112 = OpLoad %6 %111
        %113 = OpConvertSToF %98 %112
        %114 = OpCompositeConstruct %99 %104 %107 %110 %113
               OpStore %101 %114
               OpBranch %97
        %115 = OpLabel
        %116 = OpAccessChain %20 %17 %18 %18
        %117 = OpLoad %6 %116
        %118 = OpConvertSToF %98 %117
        %119 = OpCompositeConstruct %99 %118 %118 %118 %118
               OpStore %101 %119
               OpBranch %97
         %97 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %11 = OpVariable %10 Function
         %23 = OpVariable %10 Function
         %29 = OpVariable %28 Function
         %55 = OpVariable %10 Function
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %6 %21
               OpStore %11 %22
         %24 = OpAccessChain %20 %17 %18 %19
         %25 = OpLoad %6 %24
               OpStore %23 %25
         %30 = OpAccessChain %20 %17 %18 %19
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %20 %17 %18 %19
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %20 %17 %18 %19
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %20 %17 %18 %19
         %37 = OpLoad %6 %36
         %38 = OpAccessChain %20 %17 %18 %19
         %39 = OpLoad %6 %38
         %40 = OpAccessChain %20 %17 %18 %19
         %41 = OpLoad %6 %40
         %42 = OpCompositeConstruct %27 %31 %33 %35 %37 %39 %41
               OpStore %29 %42
               OpBranch %43
         %43 = OpLabel
               OpLoopMerge %45 %46 None
               OpBranch %47
         %47 = OpLabel
         %48 = OpLoad %6 %23
         %49 = OpAccessChain %20 %17 %18 %19
         %50 = OpLoad %6 %49
         %52 = OpSGreaterThanEqual %51 %48 %50
               OpBranchConditional %52 %44 %45
         %44 = OpLabel
         %53 = OpLoad %6 %23
         %54 = OpIAdd %6 %53 %19
               OpStore %23 %54
               OpStore %11 %53
               OpStore %55 %18
               OpBranch %56
         %56 = OpLabel
               OpLoopMerge %58 %59 None
               OpBranch %60
         %60 = OpLabel
         %61 = OpLoad %6 %55
         %63 = OpSLessThan %51 %61 %62
               OpBranchConditional %63 %57 %58
         %57 = OpLabel
         %64 = OpLoad %6 %11
               OpSelectionMerge %68 None
               OpSwitch %64 %68 2 %65 3 %66 5 %67
         %65 = OpLabel
         %69 = OpLoad %6 %11
         %70 = OpAccessChain %10 %29 %69
         %71 = OpLoad %6 %70
         %72 = OpIAdd %6 %71 %19
               OpStore %70 %72
               OpBranch %68
         %66 = OpLabel
         %74 = OpAccessChain %20 %17 %18 %62
         %75 = OpLoad %6 %74
         %76 = OpAccessChain %10 %29 %75
         %77 = OpLoad %6 %76
               OpReturnValue %77
         %67 = OpLabel
         %79 = OpLoad %6 %11
         %80 = OpAccessChain %10 %29 %79
         %81 = OpLoad %6 %80
         %82 = OpIAdd %6 %81 %19
               OpStore %80 %82
               OpBranch %68
         %68 = OpLabel
               OpBranch %59
         %59 = OpLabel
         %85 = OpLoad %6 %55
         %86 = OpIAdd %6 %85 %19
               OpStore %55 %86
               OpBranch %56
         %58 = OpLabel
               OpBranch %46
         %46 = OpLabel
               OpBranch %43
         %45 = OpLabel
         %87 = OpAccessChain %20 %17 %18 %18
         %88 = OpLoad %6 %87
               OpReturnValue %88
               OpFunctionEnd

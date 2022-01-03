; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 101
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %82
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %34 "j"
               OpName %37 "i"
               OpName %82 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %82 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 4
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 3
         %17 = OpTypePointer Uniform %6
         %29 = OpConstant %6 1
         %32 = OpTypeBool
         %64 = OpConstant %6 1000
         %73 = OpConstant %6 2
         %79 = OpTypeFloat 32
         %80 = OpTypeVector %79 4
         %81 = OpTypePointer Output %80
         %82 = OpVariable %81 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %34 = OpVariable %7 Function
         %37 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %21 = OpAccessChain %17 %14 %15 %16
         %22 = OpLoad %6 %21
               OpStore %20 %22
               OpBranch %23
         %23 = OpLabel
               OpLoopMerge %25 %26 None
               OpBranch %27
         %27 = OpLabel
         %28 = OpLoad %6 %20
         %30 = OpAccessChain %17 %14 %15 %29
         %31 = OpLoad %6 %30
         %33 = OpSLessThan %32 %28 %31
               OpBranchConditional %33 %24 %25
         %24 = OpLabel
         %35 = OpAccessChain %17 %14 %15 %29
         %36 = OpLoad %6 %35
               OpStore %34 %36
         %38 = OpLoad %6 %20
               OpStore %37 %38
               OpBranch %39
         %39 = OpLabel
               OpLoopMerge %41 %42 None
               OpBranch %43
         %43 = OpLabel
         %44 = OpLoad %6 %37
         %45 = OpAccessChain %17 %14 %15 %29
         %46 = OpLoad %6 %45
         %47 = OpSLessThanEqual %32 %44 %46
               OpBranchConditional %47 %40 %41
         %40 = OpLabel
         %48 = OpLoad %6 %8
         %49 = OpIAdd %6 %48 %29
               OpStore %8 %49
               OpStore %34 %29
               OpBranch %50
         %50 = OpLabel
               OpLoopMerge %52 %53 None
               OpBranch %54
         %54 = OpLabel
         %55 = OpLoad %6 %34
         %56 = OpLoad %6 %37
         %57 = OpSLessThan %32 %55 %56
               OpBranchConditional %57 %51 %52
         %51 = OpLabel
         %58 = OpAccessChain %17 %14 %15 %16
         %59 = OpLoad %6 %58
               OpStore %8 %59
         %60 = OpAccessChain %17 %14 %15 %15
         %61 = OpLoad %6 %60
         %62 = OpLoad %6 %37
         %63 = OpIMul %6 %61 %62
         %65 = OpSDiv %6 %63 %64
               OpStore %37 %65
               OpBranch %53
         %53 = OpLabel
         %66 = OpLoad %6 %34
         %67 = OpIAdd %6 %66 %29
               OpStore %34 %67
               OpBranch %50
         %52 = OpLabel
         %68 = OpLoad %6 %37
         %69 = OpIAdd %6 %68 %29
               OpStore %37 %69
               OpBranch %42
         %42 = OpLabel
               OpBranch %39
         %41 = OpLabel
               OpBranch %26
         %26 = OpLabel
         %70 = OpLoad %6 %20
         %71 = OpIAdd %6 %70 %29
               OpStore %20 %71
               OpBranch %23
         %25 = OpLabel
         %72 = OpLoad %6 %8
         %74 = OpAccessChain %17 %14 %15 %73
         %75 = OpLoad %6 %74
         %76 = OpIEqual %32 %72 %75
               OpSelectionMerge %78 None
               OpBranchConditional %76 %77 %96
         %77 = OpLabel
         %83 = OpAccessChain %17 %14 %15 %29
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %79 %84
         %86 = OpAccessChain %17 %14 %15 %16
         %87 = OpLoad %6 %86
         %88 = OpConvertSToF %79 %87
         %89 = OpAccessChain %17 %14 %15 %16
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %79 %90
         %92 = OpAccessChain %17 %14 %15 %29
         %93 = OpLoad %6 %92
         %94 = OpConvertSToF %79 %93
         %95 = OpCompositeConstruct %80 %85 %88 %91 %94
               OpStore %82 %95
               OpBranch %78
         %96 = OpLabel
         %97 = OpAccessChain %17 %14 %15 %16
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %79 %98
        %100 = OpCompositeConstruct %80 %99 %99 %99 %99
               OpStore %82 %100
               OpBranch %78
         %78 = OpLabel
               OpReturn
               OpFunctionEnd

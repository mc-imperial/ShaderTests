; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 95
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %76
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %11 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %33 "i"
               OpName %36 "buf1"
               OpMemberName %36 0 "injectionSwitch"
               OpName %38 ""
               OpName %76 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpMemberDecorate %36 0 Offset 0
               OpDecorate %36 Block
               OpDecorate %38 DescriptorSet 0
               OpDecorate %38 Binding 1
               OpDecorate %76 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 4
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 1
         %19 = OpTypePointer Uniform %6
         %28 = OpConstant %6 10
         %29 = OpTypeBool
         %34 = OpTypeFloat 32
         %35 = OpTypeVector %34 2
         %36 = OpTypeStruct %35
         %37 = OpTypePointer Uniform %36
         %38 = OpVariable %37 Uniform
         %39 = OpConstant %12 1
         %40 = OpTypePointer Uniform %34
         %44 = OpTypeVector %6 2
         %46 = OpConstantComposite %44 %9 %9
         %51 = OpConstant %12 0
         %59 = OpConstant %6 2
         %68 = OpConstant %6 3
         %74 = OpTypeVector %34 4
         %75 = OpTypePointer Output %74
         %76 = OpVariable %75 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %33 = OpVariable %10 Function
               OpStore %8 %9
         %20 = OpAccessChain %19 %17 %9 %18
         %21 = OpLoad %6 %20
               OpStore %11 %21
               OpBranch %22
         %22 = OpLabel
               OpLoopMerge %24 %25 None
               OpBranch %26
         %26 = OpLabel
         %27 = OpLoad %6 %8
         %30 = OpSLessThan %29 %27 %28
               OpBranchConditional %30 %23 %24
         %23 = OpLabel
         %31 = OpLoad %6 %11
         %32 = OpIAdd %6 %31 %18
               OpStore %11 %32
         %41 = OpAccessChain %40 %38 %9 %39
         %42 = OpLoad %34 %41
         %43 = OpConvertFToS %6 %42
         %45 = OpCompositeConstruct %44 %18 %43
         %47 = OpAccessChain %19 %17 %9 %9
         %48 = OpLoad %6 %47
         %49 = OpCompositeConstruct %44 %48 %48
         %50 = OpExtInst %44 %1 SClamp %45 %46 %49
         %52 = OpCompositeExtract %6 %50 0
               OpStore %33 %52
               OpBranch %53
         %53 = OpLabel
               OpLoopMerge %55 %56 None
               OpBranch %57
         %57 = OpLabel
         %58 = OpLoad %6 %33
         %60 = OpAccessChain %19 %17 %9 %59
         %61 = OpLoad %6 %60
         %62 = OpSLessThan %29 %58 %61
               OpBranchConditional %62 %54 %55
         %54 = OpLabel
         %63 = OpLoad %6 %8
         %64 = OpIAdd %6 %63 %18
               OpStore %8 %64
               OpBranch %56
         %56 = OpLabel
         %65 = OpLoad %6 %33
         %66 = OpIAdd %6 %65 %18
               OpStore %33 %66
               OpBranch %53
         %55 = OpLabel
               OpBranch %25
         %25 = OpLabel
               OpBranch %22
         %24 = OpLabel
         %67 = OpLoad %6 %11
         %69 = OpAccessChain %19 %17 %9 %68
         %70 = OpLoad %6 %69
         %71 = OpIEqual %29 %67 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %90
         %72 = OpLabel
         %77 = OpAccessChain %19 %17 %9 %9
         %78 = OpLoad %6 %77
         %79 = OpConvertSToF %34 %78
         %80 = OpAccessChain %19 %17 %9 %18
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %34 %81
         %83 = OpAccessChain %19 %17 %9 %18
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %34 %84
         %86 = OpAccessChain %19 %17 %9 %9
         %87 = OpLoad %6 %86
         %88 = OpConvertSToF %34 %87
         %89 = OpCompositeConstruct %74 %79 %82 %85 %88
               OpStore %76 %89
               OpBranch %73
         %90 = OpLabel
         %91 = OpAccessChain %19 %17 %9 %18
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %34 %92
         %94 = OpCompositeConstruct %74 %93 %93 %93 %93
               OpStore %76 %94
               OpBranch %73
         %73 = OpLabel
               OpReturn
               OpFunctionEnd

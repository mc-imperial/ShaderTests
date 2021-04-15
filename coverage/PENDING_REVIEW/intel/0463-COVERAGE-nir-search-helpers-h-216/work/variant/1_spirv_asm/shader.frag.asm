; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 88
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %68
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %12 "f"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_float_values"
               OpName %18 ""
               OpName %24 "i"
               OpName %26 "buf1"
               OpMemberName %26 0 "_GLF_uniform_int_values"
               OpName %28 ""
               OpName %68 "_GLF_color"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %25 ArrayStride 16
               OpMemberDecorate %26 0 Offset 0
               OpDecorate %26 Block
               OpDecorate %28 DescriptorSet 0
               OpDecorate %28 Binding 1
               OpDecorate %68 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypePointer Function %10
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 3
         %15 = OpTypeArray %10 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 1
         %20 = OpTypePointer Uniform %10
         %23 = OpTypePointer Function %6
         %25 = OpTypeArray %6 %14
         %26 = OpTypeStruct %25
         %27 = OpTypePointer Uniform %26
         %28 = OpVariable %27 Uniform
         %29 = OpTypePointer Uniform %6
         %38 = OpConstant %6 2
         %41 = OpTypeBool
         %49 = OpConstant %10 1
         %66 = OpTypeVector %10 4
         %67 = OpTypePointer Output %66
         %68 = OpVariable %67 Output
         %87 = OpConstant %6 100
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %24 = OpVariable %23 Function
               OpStore %8 %9
         %21 = OpAccessChain %20 %18 %9 %19
         %22 = OpLoad %10 %21
               OpStore %12 %22
         %30 = OpAccessChain %29 %28 %9 %19
         %31 = OpLoad %6 %30
               OpStore %24 %31
               OpBranch %32
         %32 = OpLabel
               OpLoopMerge %34 %35 None
               OpBranch %36
         %36 = OpLabel
         %37 = OpLoad %6 %24
         %39 = OpAccessChain %29 %28 %9 %38
         %40 = OpLoad %6 %39
         %42 = OpSLessThan %41 %37 %40
               OpBranchConditional %42 %33 %34
         %33 = OpLabel
         %43 = OpLoad %10 %12
         %44 = OpAccessChain %20 %18 %9 %19
         %45 = OpLoad %10 %44
         %46 = OpFOrdGreaterThan %41 %43 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %48
         %47 = OpLabel
               OpBranch %48
         %48 = OpLabel
               OpStore %12 %49
         %50 = OpAccessChain %20 %18 %9 %38
         %51 = OpLoad %10 %50
         %52 = OpLoad %10 %12
         %53 = OpExtInst %10 %1 FClamp %51 %49 %52
         %54 = OpFSub %10 %49 %53
         %55 = OpLoad %6 %24
         %56 = OpConvertSToF %10 %55
         %57 = OpFAdd %10 %54 %56
               OpStore %12 %57
               OpBranch %35
         %35 = OpLabel
         %58 = OpLoad %6 %24
         %59 = OpIAdd %6 %58 %19
               OpStore %24 %59
               OpBranch %32
         %34 = OpLabel
         %60 = OpLoad %10 %12
         %61 = OpAccessChain %20 %18 %9 %9
         %62 = OpLoad %10 %61
         %63 = OpFOrdEqual %41 %60 %62
               OpSelectionMerge %65 None
               OpBranchConditional %63 %64 %82
         %64 = OpLabel
         %69 = OpAccessChain %29 %28 %9 %9
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %10 %70
         %72 = OpAccessChain %29 %28 %9 %19
         %73 = OpLoad %6 %72
         %74 = OpConvertSToF %10 %73
         %75 = OpAccessChain %29 %28 %9 %19
         %76 = OpLoad %6 %75
         %77 = OpConvertSToF %10 %76
         %78 = OpAccessChain %29 %28 %9 %9
         %79 = OpLoad %6 %78
         %80 = OpConvertSToF %10 %79
         %81 = OpCompositeConstruct %66 %71 %74 %77 %80
               OpStore %68 %81
               OpBranch %65
         %82 = OpLabel
         %83 = OpAccessChain %29 %28 %9 %19
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %10 %84
         %86 = OpCompositeConstruct %66 %85 %85 %85 %85
               OpStore %68 %86
               OpBranch %65
         %65 = OpLabel
               OpReturn
               OpFunctionEnd

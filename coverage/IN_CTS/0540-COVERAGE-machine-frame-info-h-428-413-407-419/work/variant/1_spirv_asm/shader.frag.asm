; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 95
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %85 %87
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %12 "func(i1;"
               OpName %11 "a"
               OpName %22 "indexable"
               OpName %27 "buf0"
               OpMemberName %27 0 "_GLF_uniform_int_values"
               OpName %29 ""
               OpName %38 "indexable"
               OpName %47 "b"
               OpName %49 "indexable"
               OpName %53 "indexable"
               OpName %61 "indexable"
               OpName %85 "_GLF_color"
               OpName %87 "gl_FragCoord"
               OpName %93 "param"
               OpDecorate %26 ArrayStride 16
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 0
               OpDecorate %85 Location 0
               OpDecorate %87 BuiltIn FragCoord
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFloat 32
          %9 = OpTypeVector %8 4
         %10 = OpTypeFunction %9 %7
         %14 = OpTypeBool
         %15 = OpTypeInt 32 0
         %16 = OpConstant %15 256
         %17 = OpTypeArray %6 %16
         %18 = OpConstant %6 1
         %19 = OpConstantComposite %17 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18
         %21 = OpTypePointer Function %17
         %25 = OpConstant %15 3
         %26 = OpTypeArray %6 %25
         %27 = OpTypeStruct %26
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %30 = OpConstant %6 0
         %31 = OpTypePointer Uniform %6
         %56 = OpConstant %6 2
         %84 = OpTypePointer Output %9
         %85 = OpVariable %84 Output
         %86 = OpTypePointer Input %9
         %87 = OpVariable %86 Input
         %88 = OpConstant %15 1
         %89 = OpTypePointer Input %8
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %93 = OpVariable %7 Function
         %90 = OpAccessChain %89 %87 %88
         %91 = OpLoad %8 %90
         %92 = OpConvertFToS %6 %91
               OpStore %93 %92
         %94 = OpFunctionCall %9 %12 %93
               OpStore %85 %94
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %9 None %10
         %11 = OpFunctionParameter %7
         %13 = OpLabel
         %22 = OpVariable %21 Function
         %38 = OpVariable %21 Function
         %47 = OpVariable %7 Function
         %49 = OpVariable %21 Function
         %53 = OpVariable %21 Function
         %61 = OpVariable %21 Function
         %20 = OpLoad %6 %11
               OpStore %22 %19
         %23 = OpAccessChain %7 %22 %20
         %24 = OpLoad %6 %23
         %32 = OpAccessChain %31 %29 %30 %30
         %33 = OpLoad %6 %32
         %34 = OpSGreaterThan %14 %24 %33
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %36
         %35 = OpLabel
         %37 = OpLoad %6 %11
               OpStore %38 %19
         %39 = OpAccessChain %7 %38 %37
         %40 = OpLoad %6 %39
         %41 = OpAccessChain %31 %29 %30 %18
         %42 = OpLoad %6 %41
         %43 = OpSLessThan %14 %40 %42
               OpBranch %36
         %36 = OpLabel
         %44 = OpPhi %14 %34 %13 %43 %35
               OpSelectionMerge %46 None
               OpBranchConditional %44 %45 %46
         %45 = OpLabel
         %48 = OpLoad %6 %11
               OpStore %49 %19
         %50 = OpAccessChain %7 %49 %48
         %51 = OpLoad %6 %50
         %52 = OpLoad %6 %11
               OpStore %53 %19
         %54 = OpAccessChain %7 %53 %52
         %55 = OpLoad %6 %54
         %57 = OpAccessChain %31 %29 %30 %56
         %58 = OpLoad %6 %57
         %59 = OpExtInst %6 %1 SClamp %51 %55 %58
         %60 = OpLoad %6 %11
               OpStore %61 %19
         %62 = OpAccessChain %7 %61 %60
         %63 = OpLoad %6 %62
         %64 = OpExtInst %6 %1 SMax %59 %63
               OpStore %47 %64
         %65 = OpLoad %6 %47
         %66 = OpConvertSToF %8 %65
         %67 = OpAccessChain %31 %29 %30 %30
         %68 = OpLoad %6 %67
         %69 = OpConvertSToF %8 %68
         %70 = OpAccessChain %31 %29 %30 %30
         %71 = OpLoad %6 %70
         %72 = OpConvertSToF %8 %71
         %73 = OpAccessChain %31 %29 %30 %56
         %74 = OpLoad %6 %73
         %75 = OpConvertSToF %8 %74
         %76 = OpCompositeConstruct %9 %66 %69 %72 %75
               OpReturnValue %76
         %46 = OpLabel
         %78 = OpAccessChain %31 %29 %30 %30
         %79 = OpLoad %6 %78
         %80 = OpConvertSToF %8 %79
         %81 = OpCompositeConstruct %9 %80 %80 %80 %80
               OpReturnValue %81
               OpFunctionEnd
